import { Colors, Constants, Image, Text, View } from "react-native-ui-lib";
import { Fontisto } from "@expo/vector-icons";
import { GenericDetail, ListCard } from "../../../components";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";

import {
  HtmlParseAndView,
  HtmlParseAndViewProps,
  HtmlStyles,
} from "@react-native-html/renderer";

type newsType = {
  title: string;
  waktu: string;
  from: string;
  slug: string;
};

const news: newsType[] = [
  {
    title: "PPMI Mesir Mengadakan Fundraising untuk Membantu Rakyat Palestina",
    waktu: "22 November 2023",
    from: "PPMI Mesir",
    slug: "/berita/detail/ppmi-mesir-mengadakan-fundraising",
  },
];

export default function Page() {
  const [newsData, setNewsData] = useState<any>();
  const local = useLocalSearchParams();

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
  }, [local]);

  const dataOne = newsData?.filter((arr) => arr["slug"] == local["slug"])[0];

  return (
    <>
      <GenericDetail headerTitle="Berita">
        {dataOne ? (
          <>
            <View>
              <Text text50 white adjustsFontSizeToFit>
                {dataOne["title"].rendered}
              </Text>
            </View>
            <View>
              <Image
                source={{
                  uri: dataOne["jetpack_featured_media_url"],
                  height: (Constants.windowWidth * 80) / 100,
                }}
              />
            </View>
            <View
              style={{
                gap: 10,
              }}
            >
              <HtmlParseAndView
                rawHtml={dataOne["content"].rendered}
                htmlStyles={{
                  text: {
                    fontSize: 18,
                    lineHeight: 18 * 1.4,
                  },
                  paragraph: {
                    marginVertical: 10,
                  },
                  image: {
                    marginVertical: 0,
                  },
                  list: {
                    marginVertical: 5,
                  },
                  h1: {
                    fontSize: 30,
                    lineHeight: 30 * 1.4,
                    marginTop: 10,
                    fontWeight: "500",
                  },
                  h2: {
                    fontSize: 26,
                    lineHeight: 26 * 1.4,
                    marginTop: 10,
                    fontWeight: "500",
                  },
                  h3: {
                    fontSize: 24,
                    lineHeight: 24 * 1.4,
                    marginTop: 10,
                    fontWeight: "500",
                  },
                  listItem: {
                    marginVertical: 2,
                  },
                  listItemContent: {},
                }}
              />
            </View>
            <View
              style={{
                gap: 20,
              }}
            >
              <View row>
                <View>
                  <Text text50>Rekomendasi</Text>
                </View>
              </View>
              <View
                style={{
                  gap: 10,
                }}
              >
                {newsData.map((arr, index) => (
                  <ListCard
                    title={arr["title"].rendered}
                    date={arr["date"]}
                    url={`/berita/detail/${arr["slug"]}`}
                    from={"PPMI Mesir"}
                    img={arr["jetpack_featured_media_url"]}
                    key={index}
                  />
                ))}
              </View>
            </View>
          </>
        ) : (
          <Text>Loading</Text>
        )}
      </GenericDetail>
    </>
  );
}
