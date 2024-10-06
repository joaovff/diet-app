import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Meal } from "../../@types/meal";
import { COLORS } from "../../constants/COLORS";
import { hourFormater } from "../../utils/hourFormater";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { FONT_SIZES } from "../../constants/FONT_SIZES";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/AppNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

interface MealProps {
  meal: Meal;
}
const MealCard = ({ meal }: MealProps) => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("Details", { meal: meal })}
    >
      <View style={styles.mealInfoContainer}>
        <Text style={styles.hour}>{hourFormater(meal.hour)}</Text>
        <Text style={styles.separatorBar}>|</Text>
        <Text ellipsizeMode="tail" numberOfLines={1} style={styles.name}>
          {meal.name}
        </Text>
      </View>
      {meal.isDiet ? (
        <FontAwesome name="circle" size={17} color={COLORS.LIGHT_GREEN} />
      ) : (
        <FontAwesome name="circle" size={17} color={COLORS.LIGHT_RED} />
      )}
    </TouchableOpacity>
  );
};

export default MealCard;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: COLORS.LIGHT_GRAY_500,
    borderRadius: 8,
    padding: 20,
    marginBottom: 10,
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  mealInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  hour: {
    fontSize: FONT_SIZES.SM,
    fontWeight: "bold",
  },

  separatorBar: {
    fontSize: FONT_SIZES.MD,
    color: COLORS.LIGHT_GRAY,
    paddingHorizontal: 8,
    marginTop: -3,
  },
  name: {
    flex: 0.94,
    fontSize: FONT_SIZES.MD,
    marginTop: -3,
  },
});
