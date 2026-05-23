import React from "react";

import {
  NavigationContainer,
} from "@react-navigation/native";

import {
  createNativeStackNavigator,
} from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";

import SearchScreen from "../screens/SearchScreen";

import CompareScreen from "../screens/CompareScreen";

import ResultScreen from "../screens/ResultScreen";

import HistoryScreen from "../screens/HistoryScreen";

import FavoritesScreen from "../screens/FavoritesScreen";

const Stack =
  createNativeStackNavigator();

export default function AppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor:
              "#111",
          },

          headerTintColor: "#fff",

          contentStyle: {
            backgroundColor:
              "#111",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />

        <Stack.Screen
          name="Search"
          component={SearchScreen}
        />

        <Stack.Screen
          name="Compare"
          component={CompareScreen}
        />

        <Stack.Screen
          name="Result"
          component={ResultScreen}
        />

        <Stack.Screen
          name="History"
          component={HistoryScreen}
        />

        <Stack.Screen
          name="Favorites"
          component={FavoritesScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}