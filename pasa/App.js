// npm start -- --reset-cache 
import React, { useState } from 'react';
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
import Blinds from './components/Blinds';
import FirstPage from './components/FirstPage';
 
const App =()=>{
  const [currentPage, setCurrentPage] = useState('Start');
  const navigateTo = (page) =>{
    setCurrentPage(page)
  }
  return(<>
     <SafeAreaView>
      <View>
         {currentPage === 'Start' && <Blinds navigateTo={navigateTo} />}
         {currentPage === 'MainPage' && <FirstPage navigateTo={navigateTo} />}
      </View>
     </SafeAreaView>
  </>)
}

export default App;
