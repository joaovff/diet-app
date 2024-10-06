import React from "react";
import { View, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/AppNavigator";
import Stats from "../components/GeneralData/Stats";
import GeneralStats from "../components/GeneralData/GeneralStats";

type Props = NativeStackScreenProps<RootStackParamList, "GeneralData">;

export default function GeneraDataScreen({ route }: Props) {
  const { data } = route.params;

  return (
    <View style={styles.container}>
      <Stats data={data} />
      <GeneralStats data={data} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
