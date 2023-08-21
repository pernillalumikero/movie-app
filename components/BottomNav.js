import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import MovieSearch from './MovieSearch';
import About from './About';
import { Entypo } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();

export default function BottomNav() {
    return (
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Search" component={MovieSearch} />
          <Tab.Screen name="Settings" component={About} />
        </Tab.Navigator>
      );
}
