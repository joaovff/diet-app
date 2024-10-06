import React from "react";
import { View, StyleSheet } from "react-native";
import Form from "../components/CreateMeal/Form";
import { COLORS } from "../constants/COLORS";
import Header from "../components/HeaderNav/Header";

export default function CreateMealScreen() {
  return (
    <View style={styles.container}>
      <Header backgroundColor={COLORS.LIGHT_GRAY} title="Create meal" />
      <Form />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
