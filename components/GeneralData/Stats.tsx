import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { GeneralData } from "../../@types/generalData";
import { COLORS } from "../../constants/COLORS";
import { FONT_SIZES } from "../../constants/FONT_SIZES";
import GoBack from "../HeaderNav/GoBack";
import { percentageFormater } from "../../utils/percentageFormater";

interface StatsProps {
  data: GeneralData;
}

const Stats = ({ data }: StatsProps) => {
  return (
    <View
      style={[
        styles.header,
        data.onDietMealsPercents >= 50 ? styles.greenHeader : styles.redHeader,
      ]}
    >
      <View style={styles.goBackContainer}>
        <GoBack
          color={data.onDietMealsPercents > 50 ? COLORS.GREEN : COLORS.RED}
        />
      </View>

      <Text style={styles.percentage}>
        {percentageFormater(data.onDietMealsPercents)}%
      </Text>
      <Text style={styles.info}>of meals were within the diet</Text>
    </View>
  );
};

export default Stats;

const styles = StyleSheet.create({
  header: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    height: 200,
    borderRadius: 8,
    width: "100%",
    zIndex: -1,
  },
  goBackContainer: {
    justifyContent: "flex-start",
    width: "100%",
  },
  greenHeader: {
    backgroundColor: COLORS.LIGHT_GREEN,
  },
  redHeader: {
    backgroundColor: COLORS.LIGHT_RED,
  },
  percentage: {
    fontSize: FONT_SIZES.XXL,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: -25,
  },
  info: {
    fontSize: FONT_SIZES.MD,
    textAlign: "center",
    marginTop: 5,
  },
});
