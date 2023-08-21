import React from 'react'
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
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
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      paddingTop: 50
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
