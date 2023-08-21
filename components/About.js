import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function About() {
  return (
    <View style={styles.container}>
        <Text style={styles.header1}>About</Text>
        <Text style={styles.text} >
            Assignment to create a React-Native application
            for the Frontend developer course at JENSEN YH. 
            Information about movies is fetched with OMDb API.
            Copyright © Pernilla Lumikero 2023
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
      color: 'orange',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
    },
    text: {
      fontSize: 20,
      padding: 30
    }
  
  });
