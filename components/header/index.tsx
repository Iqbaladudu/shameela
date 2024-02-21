import { Text, View } from "react-native-ui-lib";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable } from "react-native";

type HeaderProps = {
  title: string;
};

export function Header({ title }: HeaderProps) {
  const router = useRouter();
  return (
    <View
      row
      centerV
      style={{
        gap: 5,
      }}
    >
      <Pressable onPress={() => router.back()}>
        <View>
          <Ionicons name="chevron-back-circle" size={24} color="white" />
        </View>
      </Pressable>
      <Text text70 white>
        {title}
      </Text>
    </View>
  );
}
