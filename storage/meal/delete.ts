import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "../config";
import { Meal } from "../../@types/meal";

export async function deleteMeal(id: number) {
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION);

    const meals: Meal[] = storage ? JSON.parse(storage) : [];
    const filteredMeals = meals.filter((meal) => meal.id !== id);

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(filteredMeals));
  } catch (error) {
    throw error;
  }
}
