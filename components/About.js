import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'

const image = {uri: 'https://cdn.pixabay.com/photo/2015/01/11/09/19/film-596009_1280.jpg'};

export default function About() {

  return (
    <ImageBackground source={image} style={styles.container}>
      <View style={styles.container2}></View>
        <Text style={styles.header1}>About</Text>
        <Text style={styles.text} >
            Assignment to create a React-Native application
            for the Frontend developer course at JENSEN YH. 
            Information about movies is fetched with OMDb API.
            Copyright © Pernilla Lumikero 2023
        </Text>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      paddingTop: 30
    },
    container2: {
      flex: 1,
      backgroundColor: '#000',
      width: '100%',
      height: '110%',
      opacity: 0.5,
      position: 'absolute',
      alignItems: 'center'
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
      padding: 30,
      color: 'white'
    }
  
  });
