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
import { KemenkoData } from "../../constants";
import Pendidikan from "../../assets/Icon/education.svg";
import Connection from "../../assets/Icon/connection.svg";
import Healthcare from "../../assets/Icon/healthcare.svg";
import Multimedia from "../../assets/Icon/multimedia.svg";
import People from "../../assets/Icon/people.svg";
import slugify from "slugify";

const kemenkoIcon = [Pendidikan, Connection, Healthcare, Multimedia, People];

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
            Kementerian Koordinator
          </Text>
          <Text text60 white>
            PPMI Mesir
          </Text>
        </View>
        <View
          marginT-40
          row
          style={{
            flexWrap: "wrap",
            justifyContent: "center",
            rowGap: 15,
            columnGap: 15,
          }}
        >
          {KemenkoData.map(({ nama }, index) => (
            <MenuItemGrid
              title={nama}
              key={index}
              url={slugify(nama)}
              icon={kemenkoIcon[index]}
            />
          ))}
        </View>
      </View>
    </GenericDetail>
  );
}

type MenuItemGridProps = {
  imgSource?: ImageSourcePropType;
  title: string;
  url: string;
  icon?: any;
};

function MenuItemGrid({ imgSource, title, url, icon }: MenuItemGridProps) {
  return (
    <Link href={`/kegiatan/detail/${url}`}>
      <View>
        <View
          backgroundColor={Colors.white}
          style={{
            alignSelf: "flex-start",
            width: 150,
            height: 150,
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
            {icon ? (
              <View>{icon()}</View>
            ) : (
              <Image
                source={imgSource}
                style={{
                  resizeMode: "stretch",
                  aspectRatio: 1 / 1,
                }}
              />
            )}
          </View>
        </View>
        <View width={150} height={50}>
          <LinearGradient
            colors={["#0A184F", "#0575E6"]}
            style={{
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              position: "relative",
              padding: 5,
            }}
          >
            <Text adjustsFontSizeToFit white text90 center>
              {title}
            </Text>
          </LinearGradient>
        </View>
      </View>
    </Link>
  );
}
