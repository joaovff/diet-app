import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { GeneralData } from "../../@types/generalData";
import { FONT_SIZES } from "../../constants/FONT_SIZES";
import { COLORS } from "../../constants/COLORS";

interface DataProps {
  data: GeneralData;
}

const GeneralStats = ({ data }: DataProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>General data</Text>

      <View style={styles.dataContainer}>
        <Text style={styles.keyData}>{data.mealsInRow}</Text>
        <Text style={styles.subtitle}>
          current sequence of meals within the diet
        </Text>
      </View>

      <View style={styles.dataContainer}>
        <Text style={styles.keyData}>{data.totalMeals}</Text>
        <Text style={styles.subtitle}>registered meals</Text>
      </View>

      <View style={styles.rowContainer}>
        <View style={[styles.isOnDietContainer, styles.onDietContainer]}>
          <Text style={styles.keyData}>{data.mealsOnDiet}</Text>
          <Text style={styles.subtitle}>meals within the diet</Text>
        </View>

        <View style={[styles.isOnDietContainer, styles.offDietContainer]}>
          <Text style={styles.keyData}>{data.mealsOffDiet}</Text>
          <Text style={styles.subtitle}>meals off the diet</Text>
        </View>
      </View>
    </View>
  );
};

export default GeneralStats;

const styles = StyleSheet.create({
  container: {
    padding: 30,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
    backgroundColor: COLORS.WHITE,
    marginTop: -30,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  title: {
    fontSize: FONT_SIZES.MD,
    fontWeight: "bold",
    marginBottom: 30,
    marginTop: -10,
    textAlign: "center",
  },
  keyData: {
    fontSize: FONT_SIZES.XL,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
  },
  subtitle: {
    fontSize: FONT_SIZES.SM,
    marginBottom: 5,
    textAlign: "center",
  },
  dataContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.LIGHT_GRAY_500,
    width: "100%",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  isOnDietContainer: {
    width: "48%",
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 8,
  },
  onDietContainer: {
    backgroundColor: COLORS.LIGHT_GREEN,
    marginRight: 10,
  },
  offDietContainer: {
    backgroundColor: COLORS.LIGHT_RED,
  },
});
