import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import BottomNav from './BottomNav';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
        
      <Text style={styles.header1}>Movie Database</Text>
      <Text style={styles.text}>Welcome to the Movie Database! 
        Here you can search for your favorite movies,
        series and games with the help of the OMDb API. 
        Enjoy!
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      paddingTop: 30
    },
    header1: {
      fontSize: 40,
      color: 'orange'
    },
    text: {
      fontSize: 20,
      padding: 30
    }
  
  });
