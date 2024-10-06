import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FONT_SIZES } from "../../constants/FONT_SIZES";

const EmptyList = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/empty-list.png")}
      />
      <Text style={styles.title}>No meals added yet!</Text>
    </View>
  );
};

export default EmptyList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: "contain",
    marginBottom: 20,
  },
  title: {
    fontSize: FONT_SIZES.LG,
    textAlign: "center",
  },
  subtitle: {
    marginTop: 8,
    fontSize: FONT_SIZES.MD,
    textAlign: "center",
    width: "45%",
  },
});
