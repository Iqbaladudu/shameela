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
              source={require("../../assets/Logo/KPI.png")}
              style={{
                resizeMode: "stretch",
              }}
            />
          </View>
        </View>
        <View>
          <Text text60 center>
            Komisi Peduli Interaksi (KPI)
          </Text>
        </View>
        <View marginT-10>
          <Text text60>Profil</Text>
          <Text text70>
            KPI adalah lembaga semi otonom PPMI Mesir yang bertanggung jawab
            langsung kepada Presiden dan Wakil Presiden PPMI Mesir. KPI memiliki
            tugas dan wewenang untuk memberikan edukasi tentang norma, etika,
            dan adab berinteraksi serta menyelesaikan segala permasalahan yang
            berkaitan dengan adab dan norma interaksi, baik lawan jenis maupun
            sesama jenis.
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
