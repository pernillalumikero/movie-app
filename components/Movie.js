import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { useState, useEffect } from 'react';
import { FlatList } from 'react-native-gesture-handler';

export default function Movie({ route }) {

    const { itemId } = route.params;

    const [movie, setMovie] = useState({})

    const fetchMovies = async () => {
        try {
            const response = await fetch(`https://www.omdbapi.com/?apikey=39ecd9bc&i=${itemId}`);
            const serchedMovie = await response.json();
            setMovie(serchedMovie)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchMovies();
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.header1}>{movie.Title}</Text>
            <View style={styles.row}>
            <Text style={styles.bold}>Released: </Text><Text>{movie.Released}</Text>
            </View>
            <View style={styles.row}>
            <Text style={styles.bold}>Rated: </Text><Text>{movie.Rated}</Text>
            </View>
            <View style={styles.row}>
            <Text style={styles.bold}>Runtime: </Text><Text>{movie.Runtime}</Text>
            </View>
            <View style={styles.row}>
            <Text style={styles.bold}>Genre: </Text><Text>{movie.Genre}</Text>
            </View>
            <View style={styles.row}>
            <Text style={styles.bold}>Director:</Text><Text> {movie.Director}</Text>
            </View>
            <View style={styles.row}>
            <Text style={styles.bold}>Writer: </Text><Text>{movie.Writer}</Text>
            </View>
            <View style={styles.row}>
            <Text style={styles.bold}>Actors:</Text><Text> {movie.Actors}</Text>
            </View>
            <View style={styles.row}>
            <Text style={styles.bold}>Plot:</Text><Text> {movie.Plot}</Text>
            </View>
            <View style={styles.row}>
            <Text style={styles.bold}>Language:</Text><Text> {movie.Language}</Text>
            </View>
            <View style={styles.row}>
            <Text style={styles.bold}>Country:</Text><Text> {movie.Country}</Text>
            </View>
            <View style={styles.row}>
            <Text style={styles.bold}>Awards: </Text><Text>{movie.Awards}</Text>
            </View>
            <View>
                <FlatList
                    style={styles.list}
                    numColumns={3}
                    columnWrapperStyle={{justifyContent: 'center', padding: 10}}
                    data={movie.Ratings}
                    renderItem={({ item }) =>
                        <View style={styles.rating}>
                            {item.Source == "Internet Movie Database"
                                ? <Image style={styles.icon} source={{
                                    uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png',
                                  }} />
                                : item.Source == "Rotten Tomatoes"
                                ? <Image style={styles.icon} source={{uri: 'https://www.rottentomatoes.com/assets/pizza-pie/head-assets/images/RT_TwitterCard_2018.jpg'}}/>
                                : <Image style={styles.icon} source={{uri: 'https://seekvectorlogo.com/wp-content/uploads/2020/06/metacritic-vector-logo.png'}}/>}
                            <Text style={styles.value}>{item.Value}</Text>
                        </View>
                    }
                />
            </View>
            <View style={styles.row}>
            <Text style={styles.bold}>Type:</Text><Text> {movie.Type}</Text>
            </View>
            <View style={styles.row}>
            <Text style={styles.bold}>DVD: </Text><Text>{movie.DVD}</Text>
            </View>
            <View style={styles.row}>
            <Text style={styles.bold}>BoxOffice:</Text><Text> {movie.BoxOffice}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 30,
        paddingTop: 0
      },
    header1: {
        fontSize: 30,
        color: 'orange',
        marginTop: 30,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
      },
    row: {
        flexDirection: 'row'
    },
    bold: {
        fontWeight: 'bold'
    },
    icon: {
        width: 70,
        height: 25,
        borderRadius: 5,
        margin: 5,
        
    }, 
    rating: {
        justifyContent: 'center'
    },
    list: {
       borderBlockColor: 'black',
       borderWidth: 1,
       borderRadius: 10,
       margin: 10
    },
    value: {
        paddingLeft: 22,
        paddingTop: 5
    }

});

