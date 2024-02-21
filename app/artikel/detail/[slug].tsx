import { useLocalSearchParams } from "expo-router";
import { Colors, Constants, Image, Text, View } from "react-native-ui-lib";
import { Fontisto } from "@expo/vector-icons";
import { GenericDetail, ListCard } from "../../../components";

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
    slug: "/artikel/detail/ppmi-mesir-mengadakan-fundraising",
  },
];

export default function Page() {
  return (
    <GenericDetail headerTitle="Artikel">
      <View>
        <Text text50 white>
          PPMI Mesir Mengadakan Fundraising untuk Membantu Rakyat Palestina
        </Text>
      </View>
      <View>
        <Image
          source={{
            uri: "https://dummyimage.com/600x400/000/fff",
            height: (Constants.windowWidth * 80) / 100,
          }}
        />
      </View>
      <View
        style={{
          gap: 10,
        }}
      >
        <Text
          text70
          style={{
            fontWeight: "600",
          }}
        >
          KAIRO, Mesir (12 Februari 2024) - Persatuan Pelajar dan Mahasiswa
          Indonesia (PPMI) Mesir, organisasi yang mewadahi pelajar dan mahasiswa
          Indonesia di Mesir, akan mengadakan acara penggalangan dana untuk
          membantu rakyat Palestina. Acara ini diberi tajuk "Palestine Charity:
          Berbagi untuk Sesama".
        </Text>
        <Text
          text70
          style={{
            fontWeight: "600",
          }}
        >
          Penggalangan dana ini dilatarbelakangi oleh kondisi memprihatinkan
          yang dihadapi oleh rakyat Palestina akibat konflik yang
          berkepanjangan. Banyak warga sipil yang menjadi korban, baik jiwa
          maupun harta benda. Melalui acara ini, PPMI Mesir berharap dapat
          meringankan beban mereka dan menunjukkan solidaritas dari masyarakat
          Indonesia.
        </Text>
        <Text
          text70
          style={{
            fontWeight: "600",
          }}
        >
          Acara Palestine Charity akan diadakan pada hari Sabtu, 18 Februari
          2024, bertempat di Wisma Nusantara KBRI Kairo. Acara ini akan
          dimeriahkan dengan berbagai kegiatan, seperti bazaar makanan khas
          Indonesia dan Palestina, pertunjukan seni budaya, serta lelang amal.
        </Text>
        <Text
          text70
          style={{
            fontWeight: "600",
          }}
        >
          Ketua PPMI Mesir, Ahmad Fikri, mengatakan, "Kami mengajak seluruh
          masyarakat Indonesia di Mesir untuk ikut berpartisipasi dalam acara
          ini. Setiap donasi yang diberikan akan sangat berarti bagi
          saudara-saudara kita di Palestina."
        </Text>
        <Text
          text70
          style={{
            fontWeight: "600",
          }}
        >
          Dana yang terkumpul dari acara ini akan disalurkan kepada lembaga
          kemanusiaan yang kredibel untuk membantu rakyat Palestina. PPMI Mesir
          berharap agar acara ini dapat menjadi wadah bagi masyarakat Indonesia
          untuk menyalurkan kepedulian mereka dan bersama-sama membantu
          meringankan penderitaan rakyat Palestina.
        </Text>
        <Text
          text70
          style={{
            fontWeight: "600",
          }}
        >
          Bagi masyarakat Indonesia di Mesir yang ingin berpartisipasi dalam
          acara ini, bisa menghubungi panitia penyelenggara melalui media sosial
          PPMI Mesir atau datang langsung ke Wisma Nusantara KBRI Kairo pada
          hari Sabtu, 18 Februari 2024.
        </Text>
        <Text
          text70
          style={{
            fontWeight: "600",
          }}
        >
          Selain acara penggalangan dana, PPMI Mesir juga mengajak masyarakat
          untuk terus memberikan dukungan dan doa untuk rakyat Palestina. Semoga
          konflik segera berakhir dan masyarakat Palestina bisa hidup damai dan
          sejahtera.
        </Text>
      </View>
      <View
        style={{
          gap: 20,
        }}
      >
        <View
          row
          center
          style={{
            gap: 5,
            alignSelf: "flex-start",
            padding: 10,
            borderRadius: 10,
            backgroundColor: Colors.$backgroundGeneralLight,
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
          <View>
            <Fontisto name="favorite" size={18} color={Colors.$textPrimary} />
          </View>
          <View>
            <Text text100 color={Colors.$textPrimary}>
              Rekomendasi
            </Text>
          </View>
        </View>
        <View
          style={{
            gap: 10,
          }}
        >
          <ListCard
            title={news[0].title}
            date={news[0].waktu}
            url={news[0].slug}
            from={news[0].from}
          />
          <ListCard
            title={news[0].title}
            date={news[0].waktu}
            url={news[0].slug}
            from={news[0].from}
          />
          <ListCard
            title={news[0].title}
            date={news[0].waktu}
            url={news[0].slug}
            from={news[0].from}
          />
          <ListCard
            title={news[0].title}
            date={news[0].waktu}
            url={news[0].slug}
            from={news[0].from}
          />
        </View>
      </View>
    </GenericDetail>
  );
}
