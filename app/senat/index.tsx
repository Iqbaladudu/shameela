import {
  Card,
  Colors,
  Constants,
  Image,
  Text,
  View,
} from "react-native-ui-lib";
import { GenericDetail } from "../../components";
import { LinearGradient } from "expo-linear-gradient";
import { ImageSourcePropType } from "react-native";
import { Link, useLocalSearchParams } from "expo-router";
import { kekeluargaanData, senatData } from "../../constants";

export default function Page() {
  return (
    <GenericDetail headerTitle="">
      <View
        style={{
          minHeight: Constants.screenHeight,
        }}
      >
        <View center>
          <Text text60 white>
            Senat Mahasiswa
          </Text>
        </View>
        <View
          marginT-60
          row
          style={{
            flexWrap: "wrap",
            justifyContent: "center",
            rowGap: 15,
            columnGap: 15,
          }}
        >
          {senatData.map(({ nama, logo, kepanjangan }, index) => (
            <MenuItemGrid
              imgSource={logo}
              title={kepanjangan}
              key={index}
              url={nama}
            />
          ))}
        </View>
      </View>
    </GenericDetail>
  );
}

type MenuItemGridProps = {
  imgSource: ImageSourcePropType;
  title: string;
  url: string;
};

function MenuItemGrid({ imgSource, title, url }: MenuItemGridProps) {
  return (
    <Link href={`/senat/detail/${url}`}>
      <View>
        <View
          backgroundColor={Colors.white}
          style={{
            alignSelf: "flex-start",
            width: 150,
            height: 150,
            padding: 40,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
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
          <View paddingV-20 center>
            <Image
              source={imgSource}
              style={{
                resizeMode: "stretch",
                aspectRatio: 1 / 1,
              }}
            />
          </View>
        </View>
        <View width={150}>
          <LinearGradient
            colors={["#0A184F", "#0575E6"]}
            style={{
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              position: "relative",
              padding: 5,
            }}
          >
            <Text white text90 center>
              {title}
            </Text>
          </LinearGradient>
        </View>
      </View>
    </Link>
  );
}
