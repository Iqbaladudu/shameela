import {
  Button,
  ButtonSize,
  Card,
  Colors,
  Constants,
  Text,
  TextField,
  View,
} from "react-native-ui-lib";
import { Ionicons } from "@expo/vector-icons";
import { Link, usePathname } from "expo-router";
import { useEffect, useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { GenericDetail, ListCard } from "../../components";

type newsType = {
  title: string;
  waktu: string;
  from: string;
  slug: string;
  img: string;
};

enum SourcesOption {
  PPMI = "PPMI Mesir",
  INFORMATIKA = "Informatika",
  WAWASAN = "Wawasan KKS",
}

enum CategoriesOption {
  HARD = "Hard News",
  FEATURE = "Feature",
  SOFT = "Soft News",
  OPINION = "Opini",
}

const news: newsType[] = [
  {
    title: "PPMI Mesir Mengadakan Fundraising untuk Membantu Rakyat Palestina",
    waktu: "22 November 2023",
    from: "PPMI Mesir",
    slug: "/berita/detail/ppmi-mesir-mengadakan-fundraising",
    img: "",
  },
];

export default function Page() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <GenericDetail headerTitle="Berita" backgroudHeight="10%">
      <Search />
      <NewsCarousel news={news} />
      <Categories />
      <Sources />
    </GenericDetail>
  );
}

function Categories() {
  const [buttonSelected, setButtonSelected] = useState<CategoriesOption>(
    CategoriesOption.HARD
  );

  return (
    <View
      marginT-20
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
        style={{
          gap: 10,
        }}
      >
        <Text marginT-20>Belum ada berita untuk ditampilkan</Text>
      </View>
    </View>
  );
}

function Sources() {
  const [buttonSelected, setButtonSelected] = useState<SourcesOption>(
    SourcesOption.PPMI
  );

  const newsCard = {
    "PPMI Mesir": <></>,
  };

  const [newsData, setNewsData] = useState<any>();

  useEffect(() => {
    const berita = fetch(
      "https://www.ppmimesir.or.id/wp-json/wp/v2/posts?page=1"
    )
      .then((data) => data.json())
      .then((json) => {
        const filtered = json;
        setNewsData(filtered);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <View marginT-50>
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
            {/* {Object.values(SourcesOption).map((arr, index) => (
              <Button
                key={index}
                label={arr}
                size={ButtonSize.medium}
                onPress={() => setButtonSelected(arr)}
                backgroundColor={
                  buttonSelected === arr ? Colors.$textPrimary : "#67A6A9"
                }
              />
            ))} */}
            <Button
              label="PPMI Mesir"
              size={ButtonSize.medium}
              onPress={() => setButtonSelected(SourcesOption.PPMI)}
              backgroundColor={
                buttonSelected === SourcesOption.PPMI
                  ? Colors.$textPrimary
                  : "#67A6A9"
              }
            />
          </ScrollView>
        </View>
      </View>
      <View
        marginT-10
        style={{
          gap: 10,
        }}
      >
        {newsData ? (
          newsData.map((arr, key) => (
            <ListCard
              title={arr["title"].rendered}
              date={arr["date"]}
              url={`/berita/detail/${arr["slug"]}`}
              from={"PPMI Mesir"}
              img={arr["jetpack_featured_media_url"]}
              key={key}
            />
          ))
        ) : (
          <Text>Memuat Berita</Text>
        )}
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
  const [newsData, setNewsData] = useState<any>();

  useEffect(() => {
    const berita = fetch(
      "https://www.ppmimesir.or.id/wp-json/wp/v2/posts?page=1"
    )
      .then((data) => data.json())
      .then((json) => {
        const filtered = json;
        setNewsData(filtered);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <View>
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
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: 15,
          paddingVertical: 10,
        }}
      >
        {newsData ? (
          newsData.map((arr, index) => (
            <CarouselCard
              title={arr["title"].rendered}
              waktu={arr["date"]}
              from="PPMI Mesir"
              img={arr["jetpack_featured_media_url"]}
              slug={`/berita/detail/${arr["slug"]}`}
              key={index}
            />
          ))
        ) : (
          <Text center>Belum ada data yang bisa ditampilkan</Text>
        )}
      </ScrollView>
    </View>
  );
}

function CarouselCard({ title, waktu, from, slug, img }: newsType) {
  return (
    <Link href={slug}>
      <Card
        style={{
          gap: 10,
          height: 350,
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
          source={{ uri: `${img}` }}
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
          <View
            style={{
              height: 100,
            }}
          >
            <Text
              adjustsFontSizeToFit={true}
              text80
              style={{
                fontWeight: "bold",
                height: "100%",
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
