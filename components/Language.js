import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Language() {
    return (
        <View style={styles.container}>
            <Text style={styles.header1}>Choose Language</Text>
            <Text style={styles.text}>English</Text>
            <Text style={styles.text}>Swedish</Text>
            <Text style={styles.text}>Finnish</Text>
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
        marginBottom: 20
      },
      text: {
        fontSize: 20,
        padding: 10
      }
});
