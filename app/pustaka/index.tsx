import { Colors, Constants, Text, View } from "react-native-ui-lib";
import { FontAwesome } from "@expo/vector-icons";
import { GenericDetail } from "../../components";

export default function Page() {
  return (
    <GenericDetail headerTitle="Pustaka Karya" backgroudHeight="10%">
      <View height={Constants.screenHeight} center>
        <View>
          <FontAwesome name="recycle" size={100} color={Colors.$textPrimary} />
        </View>
        <View>
          <Text>Fitur ini sedang dalam pengembangan</Text>
        </View>
      </View>
    </GenericDetail>
  );
}
