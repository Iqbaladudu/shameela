import { ImageSourcePropType } from "react-native";

export type KekeluargaanData = {
  nama: string;
  kepanjangan: string;
  logo: ImageSourcePropType;
  keterangan: string;
};

export const kekeluargaanData: KekeluargaanData[] = [
  {
    nama: "KMB",
    kepanjangan: "Kesepakatan Mahasiswa Banten",
    logo: require("../assets/Logo/KMB.png"),
    keterangan:
      "Keluarga Mahasiswa Banten (KMB) adalah organisasi kekeluargaan kedaerahan yang menghimpun seluruh mahasiswa yang berasal dari Banten. Didirikan pada tanggal 13 Maret 1976 M, hingga saat ini usia KMB mencapai 48 tahun. Seperti organisasi kekeluargaan lainnya KMB bertujuan untuk mempererat silaturahmi antar warga Banten yang ada di Mesir.",
  },
  {
    nama: "KMJ",
    kepanjangan: "Keluarga Mahasiswa Jambi",
    logo: require("../assets/Logo/KMJ.png"),
    keterangan:
      "Keluarga Mahasiswa Jambi (KMJ) merupakan organisasi kekeluargaan kedaerahan yang menghimpun seluruh mahasiswa asal Jambi. Resmi didirikan pada 23 September 1986. Namun, anggota KMJ saat itu masih aktif di KEMASS. Berkat konsolidasi antar kedua kekeluargaan akhirnya KMJ resmi berdiri secara independen.",
  },
  {
    nama: "KPJ",
    kepanjangan: "Keluarga Pelajar Jakarta",
    logo: require("../assets/Logo/KPJ.png"),
    keterangan:
      "Keluarga Pelajar Jakarta (KPJ) adalah organisasi kekeluargaan kedaerahan yang khusus bagi seluruh pelajar Jakarta. KPJ didirikan sekitar tahun 1960-an, hanya beberapa tahun KPJ mengalami kevakuman. Aktif kembali pada tahun 1973. KPJ memiliki tujuan khusus, diantaranya: Menjalin silaturahmi antar warga KPJ, mempererat ukhuwah Islamiyah, dan membantu anggota dalam studinya.",
  },
  {
    nama: "KPMJB",
    kepanjangan: "Keluarga Paguyuban Masyarakat Jawa Barat",
    logo: require("../assets/Logo/KPMJB.png"),
    keterangan:
      "Keluarga Paguyuban Masyarakat Jawa Barat (KPMJB) adalah organisasi kekeluargaan kedaerahan yang menghimpun seluruh mahasiswa Jawa Barat. Didirikan pada tanggal 10 November 1977 (saat ini sudah berusia 47 tahun) sebagai perwujudan rasa kebersamaan warga Jawa Barat, sekaligus sebagai refleksi keakraban serta kekompakan dalam meraih cita-cita.",
  },
  {
    nama: "KMA",
    kepanjangan: "Keluarga Mahasiswa Aceh",
    logo: require("../assets/Logo/KMA.png"),
    keterangan:
      "Kesepakatan Mahasiswa Minangkabau (KMM) adalah organisasi kekeluargaan kedaerahan yang menghimpun seluruh masyarakat asal Minangkabau. Rencana pendirian organisasi telah ada sejak sebelum kemerdekaan. Namun, baru terlaksana setelah kemerdekaan, tepatnya pada 23 Juni 1957.",
  },
  {
    nama: "KSW",
    kepanjangan: "Kelompok Studi Walisongo",
    logo: require("../assets/Logo/KSW.png"),
    keterangan:
      "Kelompok Studi Walisongo (KSW) adalah organisasi kekeluargaan bukan sebagai basis daerah, melainkan organisasi belajar. Itulah sebabnya KSW awalnya beranggotakan mahasiswa Jawa Tengah, Jawa Timur, dan Yogyakarta. KSW sendiri didirikan pada 31 Januari 1987. Saat ini KSW sudah berusia 37 tahun.",
  },
  {
    nama: "KEMASS",
    kepanjangan: "Keluarga Masyarakat Sumatera Selatan",
    logo: require("../assets/Logo/KEMASS.png"),
    keterangan:
      "Keluarga Masyarakat Sumatera Selatan (KEMASS) adalah organisasi kekeluargaan kedaerahan yang menghimpun seluruh masyarakat Sumatera Selatan. Didirikan pada 25 Januari 1976. Saat ini usia KEMASS 49 tahun, hampir setengah abad lamanya, dengan sejarah yang lumayan panjang.",
  },
  {
    nama: "KKS",
    kepanjangan: "Kerukunan Keluarga Sulawesi",
    logo: require("../assets/Logo/KKS.png"),
    keterangan:
      "Kerukunan Keluarga Sulawesi (KKS) adalah organisasi kekeluargaan kedaerahan yang meliputi keseluruhan pulau Sulawesi, Maluku, dan Papua. KKS didirikan di Kairo pada hari Ahad tanggal 7 Juli 1977 M sebagai kelanjutan dari Ikatan Keluarga Bugis Indonesia Malaysia (IKABIM) yang dibentuk pada 17 April 1977 di Kairo. KKS Memiliki motto ―… dan tolong menolonglah dalam (mengerjakan kebaikan dan taqwa, dan jangan tolong-menolong dalam berbuat dosa dan aniaya (pelanggaran) ....” (Al-Maidah:2)",
  },
  {
    nama: "KSMR",
    kepanjangan: "Kelompok Studi Mahasiswa Riau",
    logo: require("../assets/Logo/KSMR.png"),
    keterangan:
      "Kelompok Studi Mahasiswa Riau (KSMR) adalah organisasi kekeluargaan kedaerahan yang menghimpun seluruh mahasiswa asal Riau di Mesir. Didirikan pada bulan Maret 1987. Awal pembentukannya KSMR masih berjumlah 13 orang. KSMR dibentuk sebagai wadah silaturahmi, tempat melepas rindu, dan tempat berkeluh kesah.",
  },
  {
    nama: "KMNTB",
    kepanjangan: "Keluarga Mahasiswa Nusa Tenggara & Bali",
    logo: require("../assets/Logo/KMNTB.png"),
    keterangan:
      "Keluarga Mahasiswa Nusa Tenggara dan Bali (KM-NTB) adalah organisasi kekeluargaan kedaerahan yang meliputi keseluruhan pulau Nusa Tenggara dan Bali. KM-NTB didirikan pada 8 Desember 1987. Awalnya KM-NTB hanya mencakup mahasiswa Nusa Tenggara Barat. Namun, karena beberapa pertimbangan, maka KM-NTB mencakup tiga Provinsi yakni Nusa Tenggara Barat, Nusa Tenggara Timur, dan Bali. Hingga sekarang KM-NTB sudah berusia 36 tahun",
  },
  {
    nama: "KMKM",
    kepanjangan: "Keluarga Mahasiswa Kalimantan",
    logo: require("../assets/Logo/KMKM.png"),
    keterangan:
      "Keluarga Mahasiswa Kalimantan Mesir (KMKM) adalah organisasi kekeluargaan kedaerahan yang melingkupi seluruh pulau kalimantan. KMKM didirikan pada tanggal 14 Februari 1958 atas anjuran dari Bapak H. Abdullah Bukhari (Pejabat KBRI Kairo waktu itu). KMKM mengangkat dan menerapkan pepatah orang bahari sebagai mottonya, yaitu: ‖Barakatan, Batulungan, Bapapadahan di Banua Urang.” yang artinya ”Saling menasehati, menjalin kebersamaan dan tolong-menolong di negeri orang",
  },
  {
    nama: "KMM",
    kepanjangan: "Kesepakatan Mahasiswa Minangkabau",
    logo: require("../assets/Logo/KMM.png"),
    keterangan:
      "Kesepakatan Mahasiswa Minangkabau (KMM) adalah organisasi kekeluargaan kedaerahan yang menghimpun seluruh masyarakat asal Minangkabau. Rencana pendirian organisasi telah ada sejak sebelum kemerdekaan. Namun, baru terlaksana setelah kemerdekaan, tepatnya pada 23 Juni 1957.",
  },
  {
    nama: "IKMAL",
    kepanjangan: "Ikatan Keluarga Mahasiswa Lampung",
    logo: require("../assets/Logo/IKMAL.png"),
    keterangan:
      "Ikatan Keluarga Mahasiswa Lampung (IKMAL) Mesir adalah organisasi kekeluargaan kedaerahan yang menghimpun seluruh masyarakat Lampung di Mesir. Didirikan pada 20 Juli 2008. IKMAL Mesir memiliki semboyan sama seperti Provinsi Lampung yaitu ‖Sai Bumi Ruwa Jurai‖ disingkat (Saburai) yang berarti dalam satu bumi (Lampung) terdapat dua bagian yakni penduduk asli dan penduduk pendatang. Menandakan bahwa masyarakat Lampung sangat menjunjung tinggi keberagaman.",
  },
];

export type Senat = {
  nama: string;
  kepanjangan: string;
  logo: ImageSourcePropType;
  keterangan: string;
};

export const senatData: Senat[] = [
  {
    nama: "SEMAFU",
    kepanjangan: "Senat Mahasiswa Fakultas Ushuluddin",
    logo: require("../assets/Logo/SEMAFU.png"),
    keterangan:
      "SEMA-FU didirikan karena adanya keinginan dalam berkumpul, berserikat dan berorganisasi yang muncul pada diri mahasiswa Fakuktas Ushuluddin Universitas AlAzhar Cairo. SEMA-FU sudah berdiri semenjak 20 Oktober 2001, sehingga saat ini SEMA-FU sudah berumur 22 tahun. Pada dekade awal, SEMA-FU masih berupa sebuah perkumpulan organisasi yang memfokuskan diri pada kajian-kajian ilmiah dan pembelajaran bersama mahasiswa Fakultas Ushuluddin. Barulah pada tahun 2015 SEMA-FU bertransformasi sebagai sebuah organisasi yang memiliki landasan dasar dan perundangan-undangan hingga fokus perhatian SEMA-FU bukan hanya pada kajian pembelajaran mahasiswa, namun juga pada pengembangan diri, manajemen organisasi, dan peningkatan kualitas mahasiswa fakultas Ushuluddin",
  },
  {
    nama: "SEMAFBA",
    kepanjangan: "Senat Mahasiswa Fakultas Bahasa Arab",
    logo: require("../assets/Logo/FBA.png"),
    keterangan:
      "Sema FBA Mesir merupakan wadah perhimpunan mahasiswa Indonesia dari Fakultas atau Prodi Bahasa Arab di Mesir, baik sastra maupun sejarah dan peradaban. Sema FBA Mesir didirikan di Kairo-Mesir pada tahun 1994. Sehingga Sema FBA saat ini telah menginjak usia 30 tahun, merupakan senat mahasiswa tertua di lingkungan mahasiswa",
  },
  {
    nama: "SEMAFSI",
    kepanjangan: "Senat Mahasiswa Fakultas Syariah Islamiyah",
    logo: require("../assets/Logo/FSI.png"),
    keterangan:
      "Senat Mahasiswa Fakultas Syariah Islamiyah didirikan pada tahun 29 agustus 2005, Yang dimana ketika itu para senior syariah Islamiyah memiliki inisiatif untuk mendirikan SEMA FSI yang bertujuan untuk membuat wadah belajar bersama kepada warga syariah dan membangun komunikasi dengan universitas al azhar, sampai saat ini SEMA FSI sudah berusia 17 tahun.",
  },
  {
    nama: "SEMAFDI",
    kepanjangan: "Senat Mahasiswa Fakultas Dirasat Islamiyah",
    logo: require("../assets/Logo/FDI.png"),
    keterangan:
      "SEMA-FDI didirikan karena adanya keinginan mengembangkan potensi akademis dan menumbuhkan kepekaan sosial melalui kegiatan dalam berkumpul, berserikat dan berorganisasi yang muncul pada diri mahasiswa Fakultas Ushuluddin Universitas Al-Azhar Cairo. SEMA-FDI sudah berdiri sejak 20 Oktober 2004, sehingga saat ini SEMA-FDI sudah berumur 19 tahun.",
  },
];

export type Kemenko = {
  nama: string;

  keterangan: string;
};

export const KemenkoData: Kemenko[] = [
  {
    nama: "Kemenko Bidang Pendidikan",
    keterangan:
      "Kementerian Koordinator I atau Kemenko I merupakan kementerian yang mengkoordinasikan dua kementerian dalam bidang akademik yakni; Kementerian Keilmuan dan Kementerian Keazharan. Kementerian ini berfungsi sebagai penanggungjawab, pengawas, dan penentu kebijakan atas dua kementerian terkait. Dalam hal ini, Menteri Koordinasi (Menko) memiliki fungsi instruksi terhadap dua menteri di lingkupnya.",
  },
  {
    nama: "Kemenko Bidang Hubungan Antar Lembaga",
    keterangan:
      "Kementerian Koordinasi II atau Kemenko II merupakan kementerian yang mengoordinasikan dua kementerian di bidang hubungan dan diplomasi yakni; Kementerian Dalam Negeri dan Kementerian Luar Negeri. Kementerian ini berfungsi sebagai penanggungjawab, pengawas, dan penentu kebijakan atas dua kementerian terkait. Dalam hal ini, Menteri Koordinasi (Menko) memiliki fungsi instruksi terhadap dua menteri di lingkupnya.",
  },
  {
    nama: "Kemenko Bidang Kemasyarakatan",
    keterangan:
      "Kementerian Koordinator III atau Kemenko III merupakan kementerian yang mengoordinasikan tiga kementerian yang berhubungan dengan sisi non akademis dan kehidupan mahasiswa yakni; Kementerian Sosial dan Budaya, Kementerian Olahraga dan Seni, dan Kementerian Kesehatan. Kementerian ini berfungsi sebagai penanggungjawab, pengawas, dan penentu kebijakan atas dua kementerian terkait. Dalam hal ini, Menteri Koordinasi (Menko) memiliki fungsi instruksi terhadap tiga menteri di lingkupnya.",
  },
  {
    nama: "Kemenko Bidang Multimedia",
    keterangan:
      "Dewan penggurus (DP) Persatuan Pelajar dan Mahasiswa Indonesia (PPMI) Mesir dalam susunannnya terdiri dari komponen utama dan beberapa komponen pendukung serta terintegrasi satu sama lain dalam menyelesaikan berbagai tugas pokok dan fungsinya. Komponen utama juga disebut Badan Pengurus Harian (BPH) sebagai pelaksana tugas DP PPMI Mesir yang terdiri dari Presiden, Wakil Presiden, Sekretaris Jendral, Wakil Sekretaris Jendral, Inspektorat Jendral, Biro Kesektariatan, dan Biro keuangan. Sedangkan komponen pendukung terdiri dari lima Kementerian Koordinator yang menaungi beberapa Kementerian sebidang. Kementerian Koordinator 4 Bidang Multimedia merupakan kementerian yang berkoordinasi dengan empat kementerian yang berhubungan dengan multimedia PPMI Mesir yakni: Kementerian Desain Grafis, Kementerian PPMI Mesir TV, kementerian manajemen konten, serta Kementerian Komunikasi, Informasi, dan Inofasi Digital. Kementerian Koordinator ini berfungsi sebagai penanggung jawab, pengawas, dan penentu kebijakan atas empat Kementerian terkait. Dalam hal ini, Menteri Koordinator (Menko) memiliki fungsi instruksi terhadap empat Menteri dilingkupnya. Periode ini DP PPMI Mesir menggunakan struktur matriks dalam berorganisasi, yaitu: suatu bentuk organisasi fungsional dan struktur berbasis proyek. Dalam struktur matriks, pengurus memiliki 2 tanggung jawab: Pertama, terkait dengan fungsional kementerian, dan kedua, terkait dengan kepanitiaan, proyek atau inisiatif tertentu. Struktur ini digunakan organisasi untuk menghadapi tuntutan proyek yang beragam atau perlu beradaptasi dengan cepat dan terhadap perubahan keadaan.",
  },
  {
    nama: "Kemenko Bidang Manajemen Sumber Daya Manusia dan Organisasi",
    keterangan:
      "Kementerian Koordinator 5 atau Kemenko 5 merupakan kementerian yang mengkoordinasikan dua kementerian yakni ; Pengembangan Sumber Daya Manusia serta Organisasi dan Pengembangan Minat dan Bakat. Kementerian ini berfungsi sebagai penanggung jawab, pengawas, dan penentu kebijakan atas dua kementerian terkait. Dalam hal ini, Menteri Koordinasi dan Wakil Menteri Koordinasi (Menko dan Wamenko) memiliki fungsi instruksi dan koordinasi terhadap dua menteri di lingkupnya.",
  },
];
