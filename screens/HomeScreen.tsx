import React, { useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import Header from "../components/Home/Header";
import MealStats from "../components/Home/MealStats";
import CreateMeal from "../components/Home/CreateMeal";
import List from "../components/Home/List";
import { getAllMeals } from "../storage/meal/get-meals";
import { Meal } from "../@types/meal";
import { GeneralData } from "../@types/generalData";

export default function HomeScreen() {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [onDietMealsPercents, setOnDietMealsPercents] = useState<number>(0);
  const [mealsInRow, setMealsInRow] = useState<number>(0);

  const mealsWithinDiet = (meals: Meal[]): number => {
    const onDietMeals = meals.filter((meal) => meal.isDiet);
    return meals.length > 0 ? (onDietMeals.length * 100) / meals.length : 0;
  };

  const calculateData = (meals: Meal[]) => {
    const newOnDietMealsPercents = mealsWithinDiet(meals);
    const newMealsInRow = countMealsInRow(meals);

    return {
      mealsInRow: newMealsInRow,
      onDietMealsPercents: newOnDietMealsPercents,
      totalMeals: meals.length,
      mealsOnDiet: meals.filter((meal) => meal.isDiet).length,
      mealsOffDiet: meals.filter((meal) => !meal.isDiet).length,
    };
  };

  const fetchMeals = async () => {
    try {
      const data = await getAllMeals();

      const sortedData = data.sort((a, b) => {
        const dateA = new Date(a.date + "T" + a.hour);
        const dateB = new Date(b.date + "T" + b.hour);
        return dateB.getTime() - dateA.getTime();
      });

      setMeals(sortedData);
    } catch (error) {
      console.log(error);
    }
  };

  const countMealsInRow = (meals: Meal[]): number => {
    let count = 0;

    for (const meal of meals) {
      if (meal.isDiet) {
        count++;
      } else {
        break;
      }
    }
    return count;
  };

  useFocusEffect(
    useCallback(() => {
      fetchMeals();
    }, [])
  );

  useEffect(() => {
    if (meals.length > 0) {
      const newData = calculateData(meals);
      setOnDietMealsPercents(newData.onDietMealsPercents);
      setMealsInRow(newData.mealsInRow);
    } else {
      setOnDietMealsPercents(0);
      setMealsInRow(0);
    }
  }, [meals]);

  const data: GeneralData = {
    mealsInRow: mealsInRow,
    onDietMealsPercents: onDietMealsPercents,
    totalMeals: meals.length,
    mealsOnDiet: meals.filter((meal) => meal.isDiet).length,
    mealsOffDiet: meals.filter((meal) => !meal.isDiet).length,
  };

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <MealStats data={data} />
      <CreateMeal />
      <List meals={meals} />
    </View>
  );
}
