import {
  Colors,
  View,
  Text,
  Button,
  ButtonSize,
  Constants,
  Image,
  Card,
} from "react-native-ui-lib";
import { Entypo } from "@expo/vector-icons";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Linking, Pressable, ScrollView } from "react-native";
import { ListCard } from "../components";
import { Link } from "expo-router";
import Carousel from "react-native-snap-carousel";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Wihdah from "../assets/Icon/wihdah.svg";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Kpi from "../assets/Icon/kpi.svg";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Onboarding } from "../components/onboarding";

enum OptionCategories {
  News = "BERITA",
  Article = "ARTIKEL",
}

enum EventsCategories {
  Done = "DONE",
  Ongoing = "ONGOING",
}

const news = [
  {
    title: "PPMI Mesir Mengadakan Fundraising untuk Membantu Rakyat Palestina",
    waktu: "22 November 2023",
    slug: "/berita/detail/ppmi-mesir-mengadakan-fundraising",
    from: "PPMI Mesir",
  },
];
const article = [
  {
    title:
      "Menyingkap Peran Besar Mahasiswa Indonesia di Mesir dalam Pembangunan Indonesia",
    waktu: "22 November 2023",
    slug: "/artikel/menyingkap-peran-besar-mahasiswa",
    from: "PPMI Mesir",
  },
];

Colors.loadDesignTokens({
  primaryColor: "#0A184F",
});

export default function Page() {
  const [buttonSelected, setButtonSelected] = useState<OptionCategories>(
    OptionCategories.News
  );
  const [eventsButton, setEventsButton] = useState<EventsCategories>(
    EventsCategories.Ongoing
  );
  const [firstTime, setFirstTime] = useState<any>();
  const [downloadProgress, setDownloadProgress] = useState<number>();

  useEffect(() => {
    async function setModalData() {
      const first = await AsyncStorage.getItem("firstTime");

      if (first === null) {
        setFirstTime(true);
        AsyncStorage.setItem("firstTime", "true");
      } else if (first == "false") {
        setFirstTime(false);
      }
    }
    setModalData();
  });

  if (firstTime) {
    return <Onboarding />;
  } else {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          backgroundColor: Colors.grey80,
        }}
      >
        {/* {firstTimeModal ? (
    <AwesomeAlert
      show={firstTimeModal}
      customView={
          <View
            height={200}
            width={200}
            center
            style={{
              gap: 10,
            }}
          >
            <View ref={(r) => addTarget(r, "1")}>
              <Text
                style={{
                  fontWeight: "bold",
                }}
                center
              >
                Baca Modul Ormaba 2024 Sekarang Juga!
              </Text>
            </View>
            <View>
              <Image
                height={150}
                width={130}
                source={require("../assets/etc/cover.png")}
              />

            </View>
          </View>

      }
    />
  ) : null} */}
        <LinearGradient
          colors={["#0575E6", "#0A184F"]}
          style={{
            height: "auto",
            paddingVertical: 50,
            justifyContent: "center",
            alignItems: "center",
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,
          }}
        >
          <View centerH marginB-20>
            <Text text60 white>
              Selamat Datang di Shamela
            </Text>
            <Text text60 white>
              by PPMI Mesir
            </Text>
          </View>
          <MenuGrid />
        </LinearGradient>
        <View
          style={{
            borderTopRightRadius: 40,
          }}
        >
          <View
            padding-20
            style={{
              gap: 10,
            }}
          >
            <View
              style={{
                gap: 10,
              }}
            >
              <View>
                <Text text60>Publikasi</Text>
              </View>
            </View>
            <View
              style={{
                gap: 10,
              }}
            >
              <CarouselCard
                title="Modul Ormaba PPMI Mesir 2024"
                waktu="Sedang Berlangsung"
                from="PPMI Mesir"
                slug="Ormaba"
              />
            </View>
          </View>
          <Option
            setButtonSelected={setButtonSelected}
            buttonSelected={buttonSelected}
          />

          <View marginT-20 marginB-100>
            <View marginH-20 marginB-10>
              <Text text60>Galeri & Pemberitahuan</Text>
            </View>
            <View center marginT-10>
              {/* <Carousel
                data={[{ name: "iqbal" }, { name: "Dudu" }, { name: "Tamvan" }]}
                renderItem={({ item, index }) => (
                  <Pressable>
                    <View
                      style={{
                        height: "50%",
                        width: "100%",
                      }}
                    >
                      <Image
                        source={{
                          uri: "https://images.unsplash.com/photo-1682687221038-404cb8830901?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                          height: (Constants.windowWidth * 80) / 100,
                        }}
                        style={{
                          borderRadius: 10,
                        }}
                      />
                    </View>
                  </Pressable>
                )}
                sliderWidth={Constants.windowWidth}
                itemHeight={50}
                itemWidth={300}
                layout="default"
                loop
              /> */}
              <Text>Belum ada data untuk ditampilkan</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

type CarouselType = {
  title: string;
  waktu: string;
  from: string;
  slug: string;
};

function CarouselCard({ title, waktu, from, slug }: CarouselType) {
  return (
    <Pressable
      onPress={() =>
        Linking.openURL(
          "https://drive.google.com/file/d/1dmym56xQg6nGmhiQ9qRun-xuXNRd9He_/view?usp=sharing"
        )
      }
    >
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
          source={require("../assets/etc/cover.png")}
          style={{
            width: "100%",
            height: "100%",
            resizeMode: "stretch",
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
            height: 100,
            zIndex: 2,
            backgroundColor: Colors.white,
            borderRadius: 10,
            gap: 5,
          }}
        >
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
              adjustsFontSizeToFit
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
    </Pressable>
  );
}

type OptionProps = {
  setButtonSelected: Dispatch<SetStateAction<OptionCategories>>;
  buttonSelected: OptionCategories;
};

function Option({ setButtonSelected, buttonSelected }: OptionProps) {
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
    <View
      padding-20
      style={{
        gap: 10,
      }}
    >
      <View
        style={{
          gap: 10,
        }}
      >
        <View>
          <Text text60>Pilihan</Text>
        </View>
        <View
          row
          style={{
            gap: 10,
          }}
        >
          <Button
            label="Berita"
            size={ButtonSize.medium}
            onPress={() => setButtonSelected(OptionCategories.News)}
            backgroundColor={
              buttonSelected === "BERITA"
                ? Colors.$textPrimary
                : Colors.$backgroundDarkActive
            }
          />
          <Button
            label="Artikel"
            size={ButtonSize.medium}
            color={Colors.white}
            onPress={() => setButtonSelected(OptionCategories.Article)}
            backgroundColor={
              buttonSelected === "ARTIKEL"
                ? Colors.$textPrimary
                : Colors.$backgroundDarkActive
            }
          />
        </View>
      </View>
      <View
        style={{
          gap: 10,
        }}
      >
        {buttonSelected === "BERITA" && (
          <>
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
              <Text></Text>
            )}
          </>
        )}
        {buttonSelected === "ARTIKEL" && (
          <>
            <Text>Belum ada data</Text>
          </>
        )}
      </View>
    </View>
  );
}

function MenuGrid() {
  return (
    <View
      width={"70%"}
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        borderRadius: 10,
        gap: 5,
        justifyContent: "center",
        alignItems: "stretch",
      }}
      backgroundColor={Colors.$backgroundNeutral}
      padding-20
    >
      <MenuItem text="Berita" href="berita">
        <FontAwesome name="newspaper-o" size={24} color="white" />
      </MenuItem>
      <MenuItem text="Publikasi" href="artikel">
        <Entypo name="news" size={24} color="white" />
      </MenuItem>
      <MenuItem text="Kegiatan" href="kegiatan">
        <MaterialCommunityIcons
          name="newspaper-variant-multiple"
          size={24}
          color="white"
        />
      </MenuItem>
      <MenuItem text="Video" href="video">
        <Foundation name="play-video" size={24} color="white" />
      </MenuItem>
      <MenuItem text="Wihdah" href="wihdah">
        <Wihdah />
      </MenuItem>
      <MenuItem text="Kekeluargaan" href="kekeluargaan">
        <MaterialIcons name="groups" size={24} color="white" />
      </MenuItem>
      <MenuItem text="Senat" href="senat">
        <FontAwesome name="university" size={24} color="white" />
      </MenuItem>
      <MenuItem text="DKKM" href="dkkm">
        <MaterialIcons name="security" size={24} color="white" />
      </MenuItem>
      <MenuItem text="Kesehatan" href="kesehatan">
        <MaterialIcons name="health-and-safety" size={24} color="white" />
      </MenuItem>
      <MenuItem text="KPI" href="kpi">
        <Kpi />
      </MenuItem>
      <MenuItem text="Radio" href="radio">
        <Ionicons name="radio-sharp" size={24} color="white" />
      </MenuItem>
      <MenuItem text="Jadwal Salat" href="jadwal-salat">
        <FontAwesome6 name="mosque" size={24} color="white" />
      </MenuItem>
      <MenuItem text="Kalender" href="kalender">
        <AntDesign name="calendar" size={24} color="white" />
      </MenuItem>
      <MenuItem text="Pustaka" href="pustaka">
        <MaterialCommunityIcons name="bookshelf" size={24} color="white" />
      </MenuItem>
    </View>
  );
}

type MenuItemProps = {
  children: ReactNode;
  text: string;
  href: string;
};

function MenuItem({ children, text, href }: MenuItemProps) {
  return (
    <Link href={href}>
      <View center height={"auto"} width={50}>
        <View
          center
          backgroundColor={Colors.$textPrimary}
          style={{
            borderRadius: 5,
            height: 40,
            width: 40,
          }}
        >
          {children}
        </View>
        <View width={50} height={25}>
          <Text text100 adjustsFontSizeToFit center>
            {text}
          </Text>
        </View>
      </View>
    </Link>
  );
}
