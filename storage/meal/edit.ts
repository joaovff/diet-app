import { Meal } from "./../../@types/meal";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "../config";
import { getAllMeals } from "./get-meals";

export const editMeal = async (meal: Meal) => {
  try {
    const meals: Meal[] = await getAllMeals();

    const index = meals.findIndex((item) => item.id === meal.id);
    if (index !== -1) {
      meals[index] = { ...meals[index], ...meal };
      const storage = JSON.stringify(meals);
      await AsyncStorage.setItem(MEAL_COLLECTION, storage);
    } else {
      throw new Error("Meal not found");
    }
  } catch (error) {
    console.error("Error editing meal: ", error);
    throw error;
  }
};
