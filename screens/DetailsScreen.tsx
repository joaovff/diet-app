import React from "react";
import { View, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/AppNavigator";
import MealInfo from "../components/Details/MealInfo";
import Buttons from "../components/Details/Buttons";
import Header from "../components/HeaderNav/Header";
import { COLORS } from "../constants/COLORS";

type Props = NativeStackScreenProps<RootStackParamList, "Details">;

export default function DetailsScreen({ route }: Props) {
  const { meal } = route.params;
  const backgroundColor = meal.isDiet ? COLORS.LIGHT_GREEN : COLORS.LIGHT_RED;
  return (
    <View style={styles.container}>
      <Header backgroundColor={backgroundColor} title="Meal" />
      <MealInfo meal={meal} />
      <Buttons meal={meal} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
});
