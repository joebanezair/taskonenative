import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { DataTable } from 'react-native-paper';
import applocaltext from '../screens/appdata/ScreenData.json';
import appData from '../screens/appdata/AppData.json';
import { useNavigation } from '@react-navigation/native';
import { Styles } from './design/Styles';

const MainPage = () => {
  const navigation = useNavigation();

  const gotoBlindStructure = () => {
    navigation.navigate('BlindsStructure');
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#fff', paddingHorizontal: 0, paddingTop: 20, textAlign: 'center' }}>
      <View style={{ marginTop: '10%', textAlign: 'center' }}>
       <TouchableOpacity style={Styles.button00prev}  onPress={gotoBlindStructure}>
         <Text style={{fontSize: 17}} > {applocaltext.PreviewButtonLabel.ButtonNavigate}</Text>
       </TouchableOpacity>
      </View>
      <View>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>
              <Text  style={customStyles.dataTableText}>
                {applocaltext.PreviewHeader.lLevel}
              </Text>
            </DataTable.Title>
            <DataTable.Title>{applocaltext.PreviewHeader.tTime}</DataTable.Title>
            <DataTable.Title>{applocaltext.PreviewHeader.bBlinds}</DataTable.Title>
          </DataTable.Header>
          
          {appData.appmockdata.map((data, index) => {
            const blind = parseInt(data.bBlinds);
            const blinds = parseInt(data.bBlinds) * 2;
            return (
              <DataTable.Row key={index}>
                <DataTable.Cell  >
                  <Text style={customStyles.dataTableText}>{data.lLevel}</Text>
                </DataTable.Cell>
                <DataTable.Cell >{data.tTime}</DataTable.Cell>
                <DataTable.Cell >{blind}/{blinds}</DataTable.Cell>
              </DataTable.Row>
            );
          })}
          <DataTable.Row>
            <DataTable.Cell>
              <Text style={customStyles.dataTableText}>
               {applocaltext.PreviewFooter.lLevel}
              </Text>
            </DataTable.Cell>
            <DataTable.Cell>{applocaltext.PreviewFooter.tTime}</DataTable.Cell>
            <DataTable.Cell>{applocaltext.PreviewFooter.bBlinds}</DataTable.Cell>
          </DataTable.Row>
        </DataTable>
      </View>
    </View>
  );
};

const customStyles = {
  ...Styles,
  dataTable: {
    backgroundColor: 'lightgrey', // Change background color
  },
  dataTableText: {
    color: '#1B5DFF', 
    textAlign: 'center'
  },
  dataTableHeader: {
    backgroundColor: 'grey', // Change header background color
  },
};

export default MainPage;
