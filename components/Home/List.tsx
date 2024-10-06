import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Meal } from "../../@types/meal";
import MealCard from "./MealCard";
import EmptyList from "./EmptyList";
import { FONT_SIZES } from "../../constants/FONT_SIZES";

interface MealsProps {
  meals: Meal[];
}

const groupMealsByDate = (meals: Meal[]) => {
  return meals.reduce<{ [key: string]: Meal[] }>((acc, meal) => {
    const mealDate = meal.date;
    if (!acc[mealDate]) {
      acc[mealDate] = [];
    }
    acc[mealDate].push(meal);
    return acc;
  }, {});
};

const List: React.FC<MealsProps> = ({ meals }) => {
  const groupedMeals = groupMealsByDate(meals);

  const mealDates = Object.keys(groupedMeals).sort((a, b) => {
    return new Date(b).getTime() - new Date(a).getTime();
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={mealDates}
        keyExtractor={(item) => item}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: date }) => (
          <View>
            <Text style={styles.dateHeader}>
              {date.split("-").reverse().slice(0, 2).join(".")}.
              {date.split("-")[0].slice(-2)}
            </Text>
            <FlatList
              data={groupedMeals[date].sort((a, b) => {
                const timeA = a.hour.split(":").slice(0, 2).join(":");
                const timeB = b.hour.split(":").slice(0, 2).join(":");

                const dateA = new Date(`1970-01-01T${timeA}:00`);
                const dateB = new Date(`1970-01-01T${timeB}:00`);

                return dateB.getTime() - dateA.getTime();
              })}
              keyExtractor={(item) => `${item.id}`}
              renderItem={({ item }) => <MealCard meal={item} />}
              showsVerticalScrollIndicator={false}
              ListEmptyComponent={<EmptyList />}
            />
          </View>
        )}
        ListEmptyComponent={<EmptyList />}
      />
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
  },
  dateHeader: {
    fontSize: FONT_SIZES.MD,
    fontWeight: "bold",
    marginBottom: 5,
  },
});
