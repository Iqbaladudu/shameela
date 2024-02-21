import { useLocalSearchParams } from "expo-router";
import { GenericDetail } from "../../../components";
import { Colors, Constants, Image, Text, View } from "react-native-ui-lib";
import { KemenkoData, kekeluargaanData } from "../../../constants";
import slugify from "slugify";

import Pendidikan from "../../../assets/Icon/education.svg";
import Connection from "../../../assets/Icon/connection.svg";
import Healthcare from "../../../assets/Icon/healthcare.svg";
import Multimedia from "../../../assets/Icon/multimedia.svg";
import People from "../../../assets/Icon/people.svg";

const kemenkoIcon = [Pendidikan, Connection, Healthcare, Multimedia, People];

export default function Page() {
  const { slug } = useLocalSearchParams();
  const kemenko = KemenkoData.filter((data) => slugify(data.nama) == slug);

  const getCurrentIndex = KemenkoData.findIndex(
    (data) => kemenko[0].nama === data.nama
  );

  return (
    <GenericDetail headerTitle="Kemenko">
      <View
        centerH
        height={"auto"}
        style={{
          gap: 20,
        }}
      >
        <View>
          <View
            style={{
              alignSelf: "flex-start",
              height: "auto",
              width: "auto",
              borderRadius: 20,
              backgroundColor: Colors.white,
              padding: 10,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowOpacity: 0.27,
              shadowRadius: 4.65,
              elevation: 6,
              marginHorizontal: "auto",
            }}
          >
            {kemenkoIcon[getCurrentIndex]()}
          </View>
        </View>
        <View>
          <Text text60 center>
            {kemenko[0].nama}
          </Text>
        </View>
        <View marginT-10>
          <Text text60>Profil</Text>
          <Text text70 adjustsFontSizeToFit>
            {kemenko[0].keterangan}
          </Text>
        </View>
        <View marginT-10 width={"100%"}>
          <Text
            text60
            style={{
              textAlign: "left",
            }}
          >
            Pilihan
          </Text>
          <View center>
            <Text>Belum ada kegiatan yang bisa ditampilkan</Text>
          </View>
        </View>
      </View>
    </GenericDetail>
  );
}
