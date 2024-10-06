import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/AppNavigator";
import { COLORS } from "../constants/COLORS";
import { FONT_SIZES } from "../constants/FONT_SIZES";

type Props = NativeStackScreenProps<RootStackParamList, "Confirmation">;

export default function ConfirmationScreen({ navigation, route }: Props) {
  const { isOnDiet } = route.params;

  return (
    <View style={styles.container}>
      {!isOnDiet ? (
        <>
          <Text style={styles.titleInsuccess}>What a shame!</Text>
          <Text style={styles.subTitle}>
            <Text style={{ fontWeight: "bold" }}>
              You have gone off the diet{" "}
            </Text>
            this time, but keep making an effort. Don't give up!
          </Text>
          <Image
            source={require("../assets/insuccess.png")}
            style={styles.image}
          />
        </>
      ) : (
        <>
          <Text style={styles.titleSucess}>Keep Going!</Text>
          <Text style={styles.subTitle}>
            You're <Text style={{ fontWeight: "bold" }}>still on the diet</Text>
            , well done!
          </Text>
          <Image
            source={require("../assets/success.png")}
            style={styles.image}
          />
        </>
      )}

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.buttonText}>Go to home page</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },
  titleInsuccess: {
    fontSize: FONT_SIZES.XL,
    fontWeight: "bold",
    marginBottom: 20,
    color: COLORS.RED,
    textAlign: "center",
  },
  titleSucess: {
    fontSize: FONT_SIZES.XL,
    fontWeight: "bold",
    marginBottom: 20,
    color: COLORS.GREEN,
    textAlign: "center",
  },
  subTitle: {
    fontSize: FONT_SIZES.MD,
    marginBottom: 20,
    textAlign: "center",
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
    resizeMode: "contain",
  },
  button: {
    backgroundColor: COLORS.GRAY,
    paddingHorizontal: 35,
    paddingVertical: 15,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: COLORS.WHITE,
    fontSize: FONT_SIZES.MD,
  },
});
