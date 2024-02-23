import {SafeAreaView, View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import jsontexts from '../global_texts_and_design/Global.json'
import { Styles } from '../global_texts_and_design/Styles'

// @ts-ignore
const StartPage = ({navigation}) => {
  let currentDateTime = new Date();
  let currentDate = currentDateTime.toLocaleDateString();
  let currentTime = currentDateTime.toLocaleTimeString();
  const joe = "Joebanezair"
  
  return (
    <SafeAreaView style={Styles.mainContainer}>
     <View>
      <View>
        <Text style={Styles.text_normal_center}>{jsontexts.GeneralTexts.header_Joe + ' ' + currentTime + ' ' +currentDate}</Text>
      </View>
      <View style={Styles.button_groupFlex}>
        <View>
          <TouchableOpacity style={Styles.button_normal} onPress={
            ()=> navigation.navigate("FreshChat",{
                // I tried passing values 
                User: joe
            })}>
            <Text style={Styles.button_text}>{jsontexts.Buttons.FreshChat}</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={Styles.button_normal} onPress={()=> navigation.navigate("BlindS")}>
            <Text style={Styles.button_text}>{jsontexts.Buttons.BlindStructure}</Text>
          </TouchableOpacity>
        </View>
      </View>
     </View>
    </SafeAreaView>
  )
}

export default StartPage
