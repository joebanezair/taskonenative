import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import screenData from '../screens/appdata/ScreenData.json'
import { Styles } from './design/Styles'
import { useNavigation } from '@react-navigation/native'

export const BlindStructure = () => {
  const navigation = useNavigation();
  const gotoTables = () => {
   navigation.navigate('Home');
  };

  return (<>
    <View style={Styles.containerMain}>
     <TouchableOpacity onPress={gotoTables} style={Styles.button}>
      <Text>{screenData.PreviewButtonLabel.BackNavigate}</Text>
     </TouchableOpacity>
     <View>
      <Text>Blind Structure</Text>
     </View>
    </View>
  </>)
}
