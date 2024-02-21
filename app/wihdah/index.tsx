import { Constants, Image, Text, View } from "react-native-ui-lib";
import { GenericDetail } from "../../components";

export default function Page() {
  return (
    <GenericDetail headerTitle="Wihdah" backgroudHeight="15%">
      <View
        style={{
          minHeight: Constants.screenHeight,
        }}
      >
        <View centerH>
          <Image
            source={require("../../assets/Logo/WIHDAH.png")}
            style={{
              resizeMode: "stretch",
              aspectRatio: 1 / 1,
            }}
          />
        </View>
        <View
          style={{
            gap: 10,
          }}
        >
          <View>
            <Text
              text50
              style={{
                fontWeight: "bold",
              }}
            >
              Profil
            </Text>
          </View>
          <View
            style={{
              gap: 5,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
              }}
            >
              Wihdah merupakan kata dalam bahasa Arab yang memiliki arti
              persatuan. Wihdah PPMI Mesir merupakan organisasi khusus puteri
              yang menghimpun seluruh puteri dan mahasiswi Indonesia yang ada di
              Mesir.
            </Text>
            <Text
              style={{
                fontWeight: "bold",
              }}
            >
              Wihdah PPMI didirikan di Kairo pada tanggal 23 Januari 1989 dengan
              nama Wihdah HPMI. Wihdah PPMI adalah lembaga otonom PPMI yang
              bersifat independen, akademis, demokratis, moralis, dan
              kekeluargaan.
            </Text>
          </View>
        </View>
        <View
          marginT-30
          style={{
            gap: 10,
          }}
        >
          <View>
            <Text text60>Kegiatan</Text>
          </View>
          <View center>
            <Text>Belum ada kegiatan yang bisa ditampilkan</Text>
          </View>
        </View>
      </View>
    </GenericDetail>
  );
}
