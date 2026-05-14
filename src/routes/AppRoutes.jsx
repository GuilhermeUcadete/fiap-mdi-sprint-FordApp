import React from "react";

import {
  NavigationContainer,
} from "@react-navigation/native";

import {
  createNativeStackNavigator,
} from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import ResultScreen from "../screens/ResultScreen";
import CompareScreen from "../screens/CompareScreen";

const Stack =
  createNativeStackNavigator();

export default function AppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#111",
          },

          headerTintColor: "#fff",

          contentStyle: {
            backgroundColor: "#111",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Ford Intelligence",
          }}
        />

        <Stack.Screen
          name="Results"
          component={ResultScreen}
          options={{
            title: "Especificações",
          }}
        />

        <Stack.Screen
          name="Compare"
          component={CompareScreen}
          options={{
            title: "Comparação",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}