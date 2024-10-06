import React from "react";
import { View, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/AppNavigator";
import EditMeal from "../components/EditMeal/EditMeal";
import Header from "../components/HeaderNav/Header";
import { COLORS } from "../constants/COLORS";

type Props = NativeStackScreenProps<RootStackParamList, "Edit">;

export default function EditScreen({ navigation, route }: Props) {
  const { meal } = route.params;

  return (
    <View style={styles.container}>
      <Header backgroundColor={COLORS.LIGHT_GRAY} title="Edit meal" />
      <EditMeal meal={meal} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
});
