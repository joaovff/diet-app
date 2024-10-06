import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/Feather";
import { COLORS } from "../../constants/COLORS";
import { FONT_SIZES } from "../../constants/FONT_SIZES";
import { GeneralData } from "../../@types/generalData";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/AppNavigator";
import { percentageFormater } from "../../utils/percentageFormater";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

interface MealStatsProps {
  data: GeneralData;
}
const MealStats = ({ data }: MealStatsProps) => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.header,
          data.onDietMealsPercents >= 50
            ? styles.greenHeader
            : styles.redHeader,
        ]}
      >
        <TouchableOpacity
          style={styles.icon}
          onPress={() => navigation.navigate("GeneralData", { data })}
        >
          <Feather
            name="arrow-up-right"
            size={28}
            color={data.onDietMealsPercents >= 50 ? COLORS.GREEN : COLORS.RED}
          />
        </TouchableOpacity>
        <View style={styles.statsContainer}>
          {data.onDietMealsPercents ? (
            <Text style={styles.percentage}>
              {percentageFormater(data.onDietMealsPercents)}%
            </Text>
          ) : (
            <Text style={styles.percentage}>0,00%</Text>
          )}
          <Text style={styles.info}>of meals were within the diet</Text>
        </View>
      </View>
    </View>
  );
};

export default MealStats;

const styles = StyleSheet.create({
  container: {
    padding: 30,
    marginTop: -50,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 8,
  },
  greenHeader: {
    backgroundColor: COLORS.LIGHT_GREEN,
  },
  redHeader: {
    backgroundColor: COLORS.LIGHT_RED,
  },
  icon: {
    alignSelf: "flex-end",
  },
  statsContainer: {
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  percentage: {
    fontSize: FONT_SIZES.XXL,
    fontWeight: "bold",
    textAlign: "center",
  },
  info: {
    fontSize: FONT_SIZES.MD,
    textAlign: "center",
    marginTop: 5,
  },
});
