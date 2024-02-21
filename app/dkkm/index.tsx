import { GenericDetail } from "../../components/genericDetail";
import { Colors, Constants, Image, Text, View } from "react-native-ui-lib";

export default function Page() {
  return (
    <GenericDetail headerTitle="Senat Mahasiswa">
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
              source={require("../../assets/Logo/DKKM.png")}
              style={{
                resizeMode: "stretch",
              }}
            />
          </View>
        </View>
        <View>
          <Text text60 center>
            Dewan Keamanan dan Ketertiban Mahasiswa (DKKM)
          </Text>
        </View>
        <View marginT-10>
          <Text text60>Profil</Text>
          <Text text70>
            DKKM adalah Badan Semi Otonom dalam DP-PPMI yang bertanggung jawab
            langsung pada Presiden PPMI. Bergerak di bidang pemeliharaan
            keamanan dan ketertiban mahasiswa, penegakan hukum, perlindungan,
            pengayoman, dan pelayanan kepada mahasiswa Indonesia di Mesir. DKKM
            bertujuan mewujudkan keamanan dalam lingkungan mahasiswa. Seluruh
            mahasiswa dan pelajar Indonesia di Mesir merupakan sasaran tugas
            pokok dan fungsi anggota DKKM adalah seluruh anggota PPMI Mesir,
            demi tertib dan tegaknya hukum, terselenggaranya perlindungan,
            pengayoman, dan pelayanan kepada mahasiswa
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
