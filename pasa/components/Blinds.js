import React from 'react'
import {View, SafeAreaView, Text, Button, TouchableOpacity, ImageBackground} from 'react-native';
import { DataTable } from 'react-native-paper';
import jsonScs from '../components/jsonScripts.json'
import blindz from '../components/jsonBlinds.json'
import time from '../components/jsonTime.json'
import styles from '../design/Style';

const Blinds =({navigateTo})=>{
  return(<SafeAreaView>
    <View>
     <ImageBackground source={require('../design/im.png')} style={styles.image}>
      <TouchableOpacity style={styles.buttonRainbow} onPress={() => navigateTo('MainPage')}>
        <Text style={styles.Text11}>{jsonScs.PreviewButtonLabel.ButtonNavigate}</Text>
      </TouchableOpacity>
     </ImageBackground>
    </View>
    
    <View>
     <DataTable>
       <DataTable.Header>
        <DataTable.Title><Text style={styles.fontZize}>{jsonScs.PreviewHeader.lLevel}</Text></DataTable.Title>
        <DataTable.Title><Text style={styles.fontZizes}>{jsonScs.PreviewHeader.tTime}</Text></DataTable.Title>
        <DataTable.Title><Text style={styles.fontZizes}>{jsonScs.PreviewHeader.bBlinds}</Text></DataTable.Title>
       </DataTable.Header>
     </DataTable>

      {blindz.raisenBlindz.map((blindData, index) => {
         const blind = blindData.bBlinds;
         const doubleBlind = blind * 2;
         const timeData = time.raisenBlindTime[index];
        return (
          <DataTable.Row key={index}>
            <DataTable.Cell>
              <Text style={styles.colblue}>{index + 1}</Text>
            </DataTable.Cell>
            <DataTable.Cell>
              {timeData.time}
            </DataTable.Cell>
            <DataTable.Cell>
               <Text style={styles.lLeft}>{blind}/{doubleBlind}</Text>
            </DataTable.Cell>
          </DataTable.Row>
       )})}       

     <DataTable.Row>
       <DataTable.Cell>
         <Text style={styles.dataTableText}>{jsonScs.PreviewFooter.lLevel}</Text>
       </DataTable.Cell>
       <DataTable.Cell>
         <Text style={styles.dataTableText}>{jsonScs.PreviewFooter.tTime}</Text>
       </DataTable.Cell>
       <DataTable.Cell>
         <Text style={styles.dataTableText}>{jsonScs.PreviewFooter.bBlinds}</Text>
       </DataTable.Cell>
     </DataTable.Row>
    </View>
   </SafeAreaView>)
}

export default Blinds;

 