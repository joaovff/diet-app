import React from "react";
import {
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";
import CreateMealScreen from "../screens/CreateMealScreen";
import ConfirmationScreen from "../screens/ConfirmationMealCreationScreen";
import { Meal } from "../@types/meal";
import EditScreen from "../screens/EditScreen";
import GeneraDataScreen from "../screens/GenealDataScreen";
import { GeneralData } from "../@types/generalData";

export type RootStackParamList = {
  Home: undefined;
  Details: { meal: Meal };
  CreateMeal: undefined;
  Confirmation: { isOnDiet: boolean };
  Edit: { meal: Meal };
  GeneralData: { data: GeneralData };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreateMeal"
          component={CreateMealScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Confirmation"
          component={ConfirmationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Edit"
          component={EditScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GeneralData"
          component={GeneraDataScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
