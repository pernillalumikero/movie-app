import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import About from './About';
import Language from './Language';

const Drawer = createDrawerNavigator();

export default function DrawerNav() {
    return (
        <Drawer.Navigator screenOptions={{ headerTintColor: 'orange'}} >
          <Drawer.Screen  name="Settings" component={About} />
          <Drawer.Screen name="Language" component={Language} />
        </Drawer.Navigator>
      );
}
