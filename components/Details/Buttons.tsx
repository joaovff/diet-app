import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS } from "../../constants/COLORS";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import { FONT_SIZES } from "../../constants/FONT_SIZES";
import { deleteMeal } from "../../storage/meal/delete";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/AppNavigator";
import { Meal } from "../../@types/meal";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

interface MealIdProps {
  meal: Meal;
}

const Buttons = ({ meal }: MealIdProps) => {
  const navigation = useNavigation<NavigationProp>();

  const handleDeleteMeal = async (id: number) => {
    Alert.alert("", "Do you really want to delete the record of that meal?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Yes, delete",
        style: "destructive",
        onPress: async () => {
          await deleteMeal(id);
          navigation.navigate("Home");
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.buttons, styles.editButton]}
        onPress={() => navigation.navigate("Edit", { meal: meal })}
      >
        <Feather
          name="edit-3"
          size={20}
          color={COLORS.WHITE}
          style={[styles.icon, styles.editIcon]}
        />
        <Text style={styles.editText}>Edit meal</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.buttons]}
        onPress={() => handleDeleteMeal(meal.id)}
      >
        <AntDesign name="delete" size={20} color="black" style={styles.icon} />
        <Text style={styles.deleteText}>Delete meal</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Buttons;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  buttons: {
    flexDirection: "row",
    padding: 15,
    margin: 10,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: COLORS.GRAY,
    width: "85%",
  },
  icon: {
    width: 25,
  },
  editIcon: {
    marginLeft: -15,
  },

  deleteText: {
    fontSize: FONT_SIZES.MD,
  },

  editButton: {
    backgroundColor: COLORS.GRAY,
  },
  editText: {
    fontSize: FONT_SIZES.MD,
    color: COLORS.WHITE,
  },
});
