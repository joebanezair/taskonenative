/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import BlindStructure from './pages/BlindStructure';
import StartPage from './pages/StartPage';
import FreshChat from './pages/FreshChat';

// @ts-ignore
const Stack = createStackNavigator();
const App =()=>{
  const joe = "Joebanezair Buatona"
  return(<>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Start'>
        <Stack.Screen name='Start' 
          options={{title: joe, headerShown: false }}
          component={StartPage} />
        <Stack.Screen name='FreshChat'
          options={{title: joe, headerShown: false }}
          component={FreshChat} /> 
        <Stack.Screen name='BlindS' 
          options={{title: joe, headerShown: false }}
          component={BlindStructure} />
      </Stack.Navigator>
    </NavigationContainer>
  </>)
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
