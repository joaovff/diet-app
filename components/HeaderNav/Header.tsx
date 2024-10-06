import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FONT_SIZES } from "../../constants/FONT_SIZES";
import GoBack from "./GoBack";

interface HeaderProps {
  title: string;
  backgroundColor: string;
}

const Header = ({ title, backgroundColor }: HeaderProps) => {
  return (
    <View style={[styles.container, { backgroundColor: backgroundColor }]}>
      <GoBack />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 135,
    flexDirection: "row",
    alignItems: "center",
    zIndex: -1,
  },
  title: {
    fontSize: FONT_SIZES.LG,
    fontWeight: "bold",
    textAlign: "center",
    marginLeft: -60,
    flex: 1,
  },
});
