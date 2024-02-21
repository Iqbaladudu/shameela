import { ReactNode } from "react";
import { ImageBackground, ScrollView } from "react-native";
import { Colors, Constants, View } from "react-native-ui-lib";
import { Header } from "../header";

type GenericDetailProps = {
  headerTitle: string;
  children: ReactNode[] | ReactNode;
  backgroudHeight?: "10%" | "15%";
};
export function GenericDetail({
  headerTitle,
  children,
  backgroudHeight = "15%",
}: GenericDetailProps) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      style={{
        backgroundColor: Colors.grey80,
      }}
    >
      <View
        style={{
          flex: 1,
        }}
      >
        <ImageBackground
          source={
            backgroudHeight === "10%"
              ? require("../../assets/background/headershort.png")
              : require("../../assets/background/headertall.png")
          }
          style={{
            height: `${backgroudHeight}`,
            width: "100%",
            flex: 1,
          }}
          imageStyle={{
            resizeMode: "stretch",
          }}
        >
          <View
            padding-20
            marginB-40
            style={{
              gap: 20,
            }}
          >
            <View marginT-30>
              <Header title={headerTitle} />
            </View>
            {children}
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
}
