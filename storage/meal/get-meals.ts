import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "../config";
import { Meal } from "../../@types/meal";

export async function getAllMeals(): Promise<Meal[]> {
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION);

    const meals: Meal[] = storage ? JSON.parse(storage) : [];

    return meals;
  } catch (error) {
    throw error;
  }
}
