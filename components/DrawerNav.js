import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import MovieSearch from './MovieSearch';
import Home from './Home';
import About from './About';

const Drawer = createDrawerNavigator();

export default function DrawerNav() {
    return (
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Movie Search" component={MovieSearch} />
          <Drawer.Screen name="About" component={About} />
        </Drawer.Navigator>
      );
}
