import {
  Button,
  ButtonSize,
  Card,
  Colors,
  Constants,
  Text,
  View,
} from "react-native-ui-lib";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import { Link } from "expo-router";
import { GenericDetail } from "../../components";

enum CategoriesOption {
  VLOG = "Vlog",
  FILM = "Film",
}

export default function Page() {
  const [categoriesSelected, setCategoriesSelected] =
    useState<CategoriesOption>(CategoriesOption.VLOG);
  return (
    <GenericDetail headerTitle="Video" backgroudHeight="10%">
      <View height={Constants.screenHeight} center>
        <View>
          <FontAwesome name="recycle" size={100} color={Colors.$textPrimary} />
        </View>
        <View>
          <Text>Fitur ini sedang dalam pengembangan</Text>
        </View>
      </View>
    </GenericDetail>
  );
}

function CarouselCard({ title, slug }: any) {
  return (
    <Link href={slug}>
      <Card
        style={{
          gap: 10,
          height: 200,
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
            height: "40%",
            zIndex: 2,
            backgroundColor: Colors.white,
            borderBottomEndRadius: 10,
            gap: 5,
          }}
        >
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
