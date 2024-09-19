import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <ExpoStatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
            title: 'All Categories',
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#3f2f25'}
          }}>
          <Stack.Screen name="MealsCategories" component={CategoriesScreen} />
          <Stack.Screen
            name="MealsOverviewScreen"
            component={MealsOverviewScreen}
            // options={({ route, navigation }) => {
            //   const catId = route.params.categoryID;
            //   console.log(route)
            //   return {
            //     title: catId
            //   }
            // }}
          />
          <Stack.Screen name="MealDetails" component={MealDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
