import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import SelectDropdown from 'react-native-select-dropdown'

export default function Language() {

    const languages = ["English", "Swedish", "Finnish"]

    const image = { uri: 'https://cdn.pixabay.com/photo/2015/01/11/09/19/film-596009_1280.jpg' };

    return (
        <ImageBackground source={image} style={styles.container}>
            <View style={styles.container2}></View>
            <Text style={styles.header1}>Choose Language</Text>
            <SelectDropdown
                data={languages}
                onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index)
                }}
               
            />
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
        marginBottom: 20
    },
    text: {
        fontSize: 20,
        padding: 10,
        color: 'white'
    },
});
