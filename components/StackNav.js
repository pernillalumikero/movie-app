import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import MovieSearch from './MovieSearch';
import Movie from './Movie';

const Stack = createStackNavigator();

export default function StackNav() {
    return (
        <Stack.Navigator screenOptions={{
            headerTintColor: 'orange',
            headerStyle: {
              backgroundColor: '#181716',
            }
        }}>
            <Stack.Screen name="Search" headerTitle='Search' component={MovieSearch} />
            <Stack.Screen name="Movie" component={Movie} />
        </Stack.Navigator>
    )
}
