import {
  Button,
  ButtonSize,
  Card,
  Carousel,
  Chip,
  Colors,
  Constants,
  Text,
  TextField,
  Typography,
  View,
} from "react-native-ui-lib";
import { Ionicons } from "@expo/vector-icons";
import { Link, usePathname } from "expo-router";
import { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { GenericDetail, ListCard } from "../../components";
import { Header } from "../../components/header";

type newsType = {
  title: string;
  waktu: string;
  from: string;
  slug: string;
};

enum SourcesOption {
  PPMI = "PPMI Mesir",
  BEDUG = "Bedug",
  MANGGALA = "Manggala",
}

enum CategoriesOption {
  MASISIR = "Masisir",
  OPINI = "Opini",
  KEILMUAN = "Keilmuan",
  SEJARAH = "Sejarah",
}

const news: newsType[] = [
  {
    title: "Menunggu Kontribusi Masisir di Indonesia",
    waktu: "22 November 2023",
    from: "PPMI Mesir",
    slug: "/artikel/detail/menunggu-kontribusi-masisir-di-indonesia",
  },
];

export default function Page() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <GenericDetail headerTitle="Publikasi" backgroudHeight="10%">
      <View
        style={{
          minHeight: Constants.screenHeight,
          gap: 10,
        }}
      >
        <Search />
        <NewsCarousel news={news} />
        <Categories />
        <Sources />
      </View>
    </GenericDetail>
  );
}

function Categories() {
  const [buttonSelected, setButtonSelected] = useState<CategoriesOption>(
    CategoriesOption.MASISIR
  );

  // const newsCard = {
  //   Masisir: (
  //     <>
  //       <ListCard
  //         title={news[0].title}
  //         date={news[0].waktu}
  //         url={news[0].slug}
  //         from={news[0].from}
  //       />
  //       <ListCard
  //         title={news[0].title}
  //         date={news[0].waktu}
  //         url={news[0].slug}
  //         from={news[0].from}
  //       />
  //     </>
  //   ),
  //   Opini: (
  //     <>
  //       <ListCard
  //         title={news[0].title}
  //         date={news[0].waktu}
  //         url={news[0].slug}
  //         from={news[0].from}
  //       />
  //       <ListCard
  //         title={news[0].title}
  //         date={news[0].waktu}
  //         url={news[0].slug}
  //         from={news[0].from}
  //       />
  //       <ListCard
  //         title={news[0].title}
  //         date={news[0].waktu}
  //         url={news[0].slug}
  //         from={news[0].from}
  //       />
  //     </>
  //   ),
  //   Keilmuan: (
  //     <>
  //       <ListCard
  //         title={news[0].title}
  //         date={news[0].waktu}
  //         url={news[0].slug}
  //         from={news[0].from}
  //       />
  //       <ListCard
  //         title={news[0].title}
  //         date={news[0].waktu}
  //         url={news[0].slug}
  //         from={news[0].from}
  //       />
  //       <ListCard
  //         title={news[0].title}
  //         date={news[0].waktu}
  //         url={news[0].slug}
  //         from={news[0].from}
  //       />
  //       <ListCard
  //         title={news[0].title}
  //         date={news[0].waktu}
  //         url={news[0].slug}
  //         from={news[0].from}
  //       />
  //     </>
  //   ),
  //   Sejarah: (
  //     <>
  //       <ListCard
  //         title={news[0].title}
  //         date={news[0].waktu}
  //         url={news[0].slug}
  //         from={news[0].from}
  //       />
  //       <ListCard
  //         title={news[0].title}
  //         date={news[0].waktu}
  //         url={news[0].slug}
  //         from={news[0].from}
  //       />
  //       <ListCard
  //         title={news[0].title}
  //         date={news[0].waktu}
  //         url={news[0].slug}
  //         from={news[0].from}
  //       />
  //       <ListCard
  //         title={news[0].title}
  //         date={news[0].waktu}
  //         url={news[0].slug}
  //         from={news[0].from}
  //       />
  //       <ListCard
  //         title={news[0].title}
  //         date={news[0].waktu}
  //         url={news[0].slug}
  //         from={news[0].from}
  //       />
  //     </>
  //   ),
  // };

  return (
    <View
      style={{
        gap: 10,
      }}
    >
      <View
        style={{
          gap: 10,
        }}
      >
        <View
          row
          style={{
            gap: 10,
          }}
        >
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              gap: 15,
            }}
          >
            {Object.values(CategoriesOption).map((arr, index) => (
              <Button
                key={index}
                label={arr}
                size={ButtonSize.medium}
                onPress={() => setButtonSelected(arr)}
                backgroundColor={
                  buttonSelected === arr ? Colors.$textPrimary : "#67A6A9"
                }
              />
            ))}
          </ScrollView>
        </View>
      </View>
      <View
        center
        height={"20%"}
        style={{
          gap: 10,
        }}
      >
        <Text center>Belum ada data untuk ditampilkan</Text>
      </View>
    </View>
  );
}

function Sources() {
  const [buttonSelected, setButtonSelected] = useState<SourcesOption>(
    SourcesOption.PPMI
  );

  // const newsCard = {
  //   "PPMI Mesir": (
  //     <>
  //       <ListCard
  //         title={news[0].title}
  //         date={news[0].waktu}
  //         url={news[0].slug}
  //         from={news[0].from}
  //       />
  //       <ListCard
  //         title={news[0].title}
  //         date={news[0].waktu}
  //         url={news[0].slug}
  //         from={news[0].from}
  //       />
  //     </>
  //   ),
  //   Bedug: (
  //     <>
  //       <ListCard
  //         title={news[0].title}
  //         date={news[0].waktu}
  //         url={news[0].slug}
  //         from={news[0].from}
  //       />
  //       <ListCard
  //         title={news[0].title}
  //         date={news[0].waktu}
  //         url={news[0].slug}
  //         from={news[0].from}
  //       />
  //       <ListCard
  //         title={news[0].title}
  //         date={news[0].waktu}
  //         url={news[0].slug}
  //         from={news[0].from}
  //       />
  //     </>
  //   ),
  //   Manggala: (
  //     <>
  //       <ListCard
  //         title={news[0].title}
  //         date={news[0].waktu}
  //         url={news[0].slug}
  //         from={news[0].from}
  //       />
  //       <ListCard
  //         title={news[0].title}
  //         date={news[0].waktu}
  //         url={news[0].slug}
  //         from={news[0].from}
  //       />
  //       <ListCard
  //         title={news[0].title}
  //         date={news[0].waktu}
  //         url={news[0].slug}
  //         from={news[0].from}
  //       />
  //       <ListCard
  //         title={news[0].title}
  //         date={news[0].waktu}
  //         url={news[0].slug}
  //         from={news[0].from}
  //       />
  //     </>
  //   ),
  // };

  return (
    <View
      style={{
        gap: 10,
      }}
    >
      <View
        style={{
          gap: 10,
        }}
      >
        <View
          row
          style={{
            gap: 10,
          }}
        >
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              gap: 15,
            }}
          >
            {Object.values(SourcesOption).map((arr, index) => (
              <Button
                key={index}
                label={arr}
                size={ButtonSize.medium}
                onPress={() => setButtonSelected(arr)}
                backgroundColor={
                  buttonSelected === arr ? Colors.$textPrimary : "#67A6A9"
                }
              />
            ))}
          </ScrollView>
        </View>
      </View>
      <View
        center
        height={"20%"}
        style={{
          gap: 10,
        }}
      >
        <Text center>Belum ada data untuk ditampilkan</Text>
      </View>
    </View>
  );
}

type NewsCarouselProps = {
  news: newsType[];
};

function Search() {
  const [textSearch, onChangeText] = useState("");
  return (
    <View
      row
      padding-5
      style={{
        borderRadius: 10,
        backgroundColor: Colors.$textPrimary,
        width: Constants.windowWidth - 40,
        shadowColor: "#000",

        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 2,
      }}
    >
      <TextField
        paddingL-5
        style={{
          width: (Constants.windowWidth * 90) / 100 - 40,
          color: "white",
        }}
        placeholder="Cari yuk!"
        placeholderTextColor="white"
        onChangeText={onChangeText}
      />
      <View>
        <Ionicons name="search-circle" size={24} color={Colors.white} />
      </View>
    </View>
  );
}

function NewsCarousel({ news }: NewsCarouselProps) {
  return (
    <View
      style={{
        gap: 10,
      }}
    >
      <View
        row
        center
        style={{
          gap: 5,
          alignSelf: "flex-start",
          paddingHorizontal: 10,
          paddingVertical: 5,
          borderRadius: 15,
          backgroundColor: Colors.$textPrimary,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.27,
          shadowRadius: 4.65,

          elevation: 6,
        }}
      >
        <View>
          <FontAwesome5 name="hotjar" size={18} color="white" />
        </View>
        <View>
          <Text text100 color="white">
            Popular
          </Text>
        </View>
      </View>
      <View height={"20%"} center>
        <Text>Belum ada data untuk ditampilkan</Text>
      </View>
      {/* <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: 15,
          paddingVertical: 10,
        }}
      >
        <CarouselCard {...news[0]} />
        <CarouselCard {...news[0]} />
        <CarouselCard {...news[0]} />
        <CarouselCard {...news[0]} />
      </ScrollView> */}
    </View>
  );
}

function CarouselCard({ title, waktu, from, slug }: newsType) {
  return (
    <Link href={slug}>
      <Card
        style={{
          gap: 10,
          height: 300,
          width: 200,
          display: "flex",
          flexDirection: "column",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.27,
          shadowRadius: 4.65,

          elevation: 6,
        }}
      >
        <Card.Image
          source={{ uri: "https://dummyimage.com/600x400/000/fff" }}
          style={{
            width: "100%",
            aspectRatio: 12 / 10,
            borderRadius: 10,
            zIndex: 1,
          }}
        />
        <View
          padding-10
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            height: "45%",
            zIndex: 2,
            backgroundColor: Colors.white,
            borderRadius: 10,
            gap: 5,
          }}
        >
          <View>
            <Text text100>
              <AntDesign name="calendar" size={17} color="black" /> {waktu}
            </Text>
          </View>
          <View
            style={{
              alignSelf: "flex-start",
              borderRadius: 5,
            }}
            padding-5
            backgroundColor={Colors.$textPrimary}
          >
            <Text text100 white>
              {from}
            </Text>
          </View>
          <View>
            <Text
              text80
              style={{
                fontWeight: "bold",
              }}
            >
              {title}
            </Text>
          </View>
        </View>
      </Card>
    </Link>
  );
}
