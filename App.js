import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from './screens/CategoriesScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
    <ExpoStatusBar style='dark' />
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="MealsCategories" component={CategoriesScreen} />
    </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {  },
});
