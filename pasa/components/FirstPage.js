import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import jsonScs from '../components/jsonScripts.json';
import styles from '../design/Style';

const FirstPage = ({navigateTo}) => {
  const [seconds, setSeconds] = useState(210); //
  const [start, setStart] = useState(false);

  useEffect(() => {
    let interval = null;
    if (start) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
    } else if (!start && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [start, seconds]);

  useEffect(() => {
    if (seconds === 0) {
      navigateTo('Start');
    }
  }, [seconds]);

  const minutes = Math.floor(seconds / 60);
  const displaySeconds = seconds % 60;

  return (
    <>
      <SafeAreaView style={styles.sectionContainer}>
        <View>
          <Text style={styles.sectionTitle}>{jsonScs.page.pageTxt}</Text>
        </View>
        <View>
          <Text style={styles.Text1}>{jsonScs.page.gameTme} {minutes}:{displaySeconds < 10 ? `0${displaySeconds}` : displaySeconds}</Text>
        </View>
        <View>
          <TouchableOpacity 
            style={styles.buttonz}
            onPress={() => setStart(!start)}> 
            <Text style={styles.Text}>{start ? (<>{jsonScs.buttons.btnStarting}</>) : (<>{jsonScs.buttons.btnStart}</>)}</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.center}>{jsonScs.page.low_txt}</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

export default FirstPage;


