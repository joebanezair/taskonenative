import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
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
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Styles } from '../global_texts_and_design/Styles';
import jsontexts from '../global_texts_and_design/Global.json';

// @ts-ignore
const FreshChat = ({route, navigation}) => {
  const {User} = route.params;
  return (
    <SafeAreaView style={Styles.mainContainer}>
      <View>
        <Text>Sucessful {User}</Text>
      </View>
      <View style={Styles.button_groupFlex}>
        <View>
          <TouchableOpacity style={Styles.button_normal} onPress={()=> navigation.navigate("Start")}>
            <Text style={Styles.button_text}>{jsontexts.Buttons.Start}</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={Styles.button_normal} onPress={()=> navigation.navigate("Blinds")}>
            <Text style={Styles.button_text}>{jsontexts.Buttons.BlindStructure}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default FreshChat