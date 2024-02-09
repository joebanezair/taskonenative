import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainPage from './screens/MainPage'; 
import { BlindStructure } from './screens/BlindStructure';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={MainPage} options={{ headerShown: false }} />
        <Stack.Screen name="BlindsStructure" component={BlindStructure} options={{ headerShown: false }} />  
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
