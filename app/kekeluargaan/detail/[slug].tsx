import { useLocalSearchParams } from "expo-router";
import { GenericDetail } from "../../../components";
import { Colors, Constants, Image, Text, View } from "react-native-ui-lib";
import { kekeluargaanData } from "../../../constants";

export default function Page() {
  const { slug } = useLocalSearchParams();
  const kekeluargaan = kekeluargaanData.filter(
    (data) => data.nama == `${slug}`
  );
  console.log(kekeluargaan);

  return (
    <GenericDetail headerTitle="Kekeluargaan Nusantara">
      <View
        centerH
        height={Constants.screenHeight}
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
            <Image
              source={kekeluargaan[0].logo}
              style={{
                resizeMode: "stretch",
              }}
            />
          </View>
        </View>
        <View>
          <Text text60 center>
            {kekeluargaan[0].kepanjangan} ({kekeluargaan[0].nama})
          </Text>
        </View>
        <View marginT-10>
          <Text text60>Profil</Text>
          <Text text70>{kekeluargaan[0].keterangan}</Text>
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
