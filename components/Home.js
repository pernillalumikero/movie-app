import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';

const image = {uri: 'https://cdn.pixabay.com/photo/2015/01/11/09/19/film-596009_1280.jpg'};

export default function Home({navigation}) {
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.container}>
      <View style={styles.container2}></View>
      <Text style={styles.header1}>Movie Database</Text>
      <Text style={styles.text}>Welcome to the Movie Database! 
        Here you can search for your favorite movies,
        series and games with the help of the OMDb API. 
        Enjoy!
        </Text>
      <TouchableOpacity
        title='Search'
        onPress={() => navigation.navigate('Search')}
        style={styles.button}
        >
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
        
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      paddingTop: 50,
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
    },
    button: {
      backgroundColor: 'orange',
      padding: 10,
      borderRadius: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
    },
    buttonText: {
      color: 'white',
      fontSize: 20,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
    }
    
  
  });
