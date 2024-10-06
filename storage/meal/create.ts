import AsyncStorage from "@react-native-async-storage/async-storage";
import { Meal } from "../../@types/meal";
import { MEAL_COLLECTION } from "../config";
import { getAllMeals } from "./get-meals";

export async function createMeal(meal: Meal) {
  try {
    const storedMeals = await getAllMeals();

    const updatedMeals = storedMeals ? [...storedMeals, meal] : [meal];

    const storage = JSON.stringify(updatedMeals);
    await AsyncStorage.setItem(MEAL_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
