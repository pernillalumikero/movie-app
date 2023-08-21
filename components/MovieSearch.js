import React from 'react'
import { useState, useEffect } from 'react';
import { Text, StyleSheet, View, TextInput, FlatList, Image, TouchableOpacity, ImageBackground } from 'react-native'

export default function MovieSearch({navigation}) {

  const [movies, setMovies] = useState([]);
  const [searchedMovie, setSearchedMovie] = useState("Batman");


  let newSearch = searchedMovie;

  const fetchMovies = async () => {
    try {
      const response = await fetch(`https://www.omdbapi.com/?apikey=39ecd9bc&s=${newSearch}`);
      const movieList = await response.json();
      setMovies(movieList);
    } catch (error) {
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
  }

  const image = {uri: 'https://cdn.pixabay.com/photo/2015/01/11/09/19/film-596009_1280.jpg'};

  return (
    <ImageBackground source={image} style={styles.container}>
      <Text style={styles.header1}>Movie Search</Text>
      <TextInput
        style={styles.input}
        placeholder={searchedMovie}
        onChangeText={handleChange}>
      </TextInput>
      {!movies.Error
        ? <FlatList
        style={styles.list}
          data={movies.Search}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Movie', {
              itemId : item.imdbID
            })} >
              <Text style={styles.title}>{item.Title}</Text>
              <Image source={{ uri: item.Poster }} style={styles.poster} />
              <Text>Year: {item.Year}</Text>
              <Text>Type: {item.Type}</Text>
              <View style={styles.line}></View>
            </TouchableOpacity>
          )}
        />
        : <Text style={styles.error}>{movies.Error}</Text>}

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
  input: {
    marginTop: 20,
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    width: 180,
    fontSize: 20,

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
  },
  list: {
    backgroundColor: 'rgba(255, 255, 255, 0.0)'
  },
  error: {
    color: 'red',
  }

});
