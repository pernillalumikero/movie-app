import React from 'react'
import { useState, useEffect } from 'react';
import { Text, StyleSheet, View, TextInput, FlatList, Image } from 'react-native'

export default function MovieSearch() {

    const [movies, setMovies] = useState([]);
    const [searchedMovie, setSearchedMovie] = useState("My little pony");

    let newSearch = searchedMovie;

    const fetchMovies = async () => {
        try {
          const response = await fetch(`https://www.omdbapi.com/?apikey=39ecd9bc&s=${newSearch}`);
          const movieList = await response.json();
          setMovies(movieList);
        } catch(error) {
          console.log(error)
        }
      }

      useEffect(() => {
        fetchMovies();
      }, [])

      const handleChange = (value) => {
        newSearch = value
        setSearchedMovie(newSearch)
        fetchMovies()
        
        console.log(movies)
      }

    return (
        <View style={styles.container}>
            <Text style={styles.header1}>MovieSearch</Text>
            <TextInput
                style={styles.input}
                placeholder={searchedMovie}
                onChangeText={handleChange}>
            </TextInput>
            <FlatList 
              data={movies.Search}
              renderItem={({item}) => (
                <View style={styles.container}>
                <Text style={styles.title}>{item.Title}</Text>
                <Image source={{uri: item.Poster}} style={styles.poster} />
                <Text>Year: {item.Year}</Text>
                <Text>Type: {item.Type}</Text>
                <View style={styles.line}></View>
                </View>
              )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 50,
    },
    header1: {
        fontSize: 40,
        color: 'orange'
    },
    text: {
        fontSize: 20,
        padding: 30
    },
    input: {
        marginTop: 20,
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        width: 180,
        fontSize: 20
    },
    poster: {
      height: 100,
      width: 80,
      marginBottom: 20
    },
    title: {
      fontSize: 20,
      padding: 20,
      paddingTop: 0
    },
    line: {
      height: 1,
      width: 300,
      backgroundColor: 'black',
      marginTop: 20
    }

});
