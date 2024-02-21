import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Pressable } from "react-native";
import { Colors, Constants, Image, Text, View } from "react-native-ui-lib";

enum Position {
  One,
  Two,
  Three,
  Four,
}

export function Onboarding() {
  const [position, setPosition] = useState<Position>(Position.One);

  return (
    <View
      width={Constants.windowWidth}
      height={"100%"}
      style={{
        backgroundColor: "#C6E1FD",
        gap: 15,
      }}
      center
    >
      {position === Position.One && <Intro />}
      {position === Position.Two && <PageOne />}
      {position === Position.Three && <PageTwo />}
      {position === Position.Four && <PageThree />}
      <Button position={position} setPosition={setPosition} />
      <Footer />
    </View>
  );
}

function PageThree() {
  return (
    <>
      <View
        center
        width={"70%"}
        style={{
          gap: 5,
        }}
      >
        <Text $textPrimary text60>
          Update with Shameela App
        </Text>
        <View>
          <Image
            height={200}
            width={200}
            source={require("../../assets/Logo/logo.png")}
          />
        </View>
      </View>
    </>
  );
}

function PageTwo() {
  return (
    <>
      <View>
        <Image source={require("../../assets/Icon/Why.png")} />
      </View>
      <View
        center
        width={"70%"}
        style={{
          gap: 5,
        }}
      >
        <Text $textPrimary text60>
          Kenapa Harus ada Shameela?
        </Text>
        <Text $textPrimary center>
          Shameela dibuat guna menjadi wadah portal informasi bagi masisir
          dengan beberapa cakupan di dalam aplikasi ini.
        </Text>
      </View>
    </>
  );
}

function PageOne() {
  return (
    <>
      <View>
        <Image source={require("../../assets/Icon/Question.png")} />
      </View>
      <View
        center
        width={"70%"}
        style={{
          gap: 5,
        }}
      >
        <Text $textPrimary text60>
          Apa itu Shameela
        </Text>
        <Text $textPrimary center>
          Shameela merupakan aplikasi portal informasi yang dibuat oleh PPMI
          Mesir untuk seluruh masisir.
        </Text>
      </View>
    </>
  );
}

function Intro() {
  return (
    <>
      <View width={Constants.windowWidth / 2}>
        <Text $textPrimary text50 center>
          Selamat Datang di Shameela App
        </Text>
      </View>
    </>
  );
}

type ButtonProps = {
  position: Position;
  setPosition: React.Dispatch<React.SetStateAction<Position>>;
};

function Button({ position, setPosition }: ButtonProps) {
  const [firstTime, setFirstTime] = useState<any>();

  async function setOnboardingData() {
    AsyncStorage.setItem("firstTime", "false");
  }

  return (
    <Pressable
      onPress={() => {
        if (position === Position.One) {
          setPosition(Position.Two);
        } else if (position === Position.Two) {
          setPosition(Position.Three);
        } else if (position === Position.Three) {
          setPosition(Position.Four);
        } else if (position === Position.Four) {
          setOnboardingData();
        }
      }}
    >
      <View
        style={{
          backgroundColor: Colors.$textPrimary,
          paddingHorizontal: 10,
          paddingVertical: 5,
          width: 100,
        }}
        center
      >
        <Text white>
          {position === Position.One || position === Position.Four
            ? "Mulai"
            : "Next"}
        </Text>
      </View>
    </Pressable>
  );
}

function Footer() {
  return (
    <View
      style={{
        position: "absolute",
        bottom: "5%",
      }}
    >
      <Text
        $textPrimary
        style={{
          fontWeight: "500",
        }}
      >
        Powered by
      </Text>
      <View row>
        <View>
          <Image source={require("../../assets/Logo/ppmi.png")} />
        </View>
        <View>
          <Image source={require("../../assets/Logo/abdikarya.png")} />
        </View>
      </View>
    </View>
  );
}
