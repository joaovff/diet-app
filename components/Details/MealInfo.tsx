import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Meal } from "../../@types/meal";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { COLORS } from "../../constants/COLORS";
import { FONT_SIZES } from "../../constants/FONT_SIZES";

interface MealInfoProps {
  meal: Meal;
}

const MealInfo = ({ meal }: MealInfoProps) => {
  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text style={styles.title}>{meal.name}</Text>
          <Text style={styles.info}>{meal.description}</Text>
        </View>

        <View>
          <Text style={styles.title}>Date and hour</Text>

          <Text style={styles.info}>
            {meal.date.split("-").reverse().join("/")} at{" "}
            {meal.hour.slice(0, -3)}
          </Text>
        </View>

        <View style={styles.isDietContainer}>
          {meal.isDiet ? (
            <>
              <FontAwesome
                name="circle"
                size={10}
                color={COLORS.GREEN}
                style={styles.icon}
              />
              <Text>on the diet</Text>
            </>
          ) : (
            <>
              <FontAwesome
                name="circle"
                size={10}
                style={styles.icon}
                color={COLORS.RED}
              />
              <Text>off the diet</Text>
            </>
          )}
        </View>
      </View>
    </View>
  );
};

export default MealInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 10,
    justifyContent: "space-between",
    zIndex: 1,
    backgroundColor: COLORS.WHITE,
    marginTop: -30,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  title: {
    fontSize: FONT_SIZES.LG,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 20,
  },
  info: {
    fontSize: FONT_SIZES.MD,
    marginTop: 5,
  },
  icon: {
    marginRight: 5,
    marginLeft: 5,
  },
  isDietContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    backgroundColor: COLORS.LIGHT_GRAY_500,
    padding: 8,
    borderRadius: 25,
    width: 110,
  },
});
