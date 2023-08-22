import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import DrawerNav from './DrawerNav';
import { Ionicons } from '@expo/vector-icons'; 
import StackNav from './StackNav';

const Tab = createBottomTabNavigator();

export default function BottomNav() {
    return (
        <Tab.Navigator
        screenOptions={{
          headerShown: false,
          headerTintColor: 'orange',
          headerStyle: {
            backgroundColor: '#000',
          }
          
      }} >
          <Tab.Screen name="Home" component={Home} options={{ tabBarIcon: ({color}) => <Ionicons name="home" size={24} color={color} />}}/>
          <Tab.Screen name="Search" component={StackNav} options={{ tabBarIcon: ({color}) => <Ionicons name="search" size={24} color={color} />}} />
          <Tab.Screen name="Settings" component={DrawerNav} options={{ tabBarIcon: ({color}) => <Ionicons name="ios-settings-sharp" size={24} color={color} />}} />
        </Tab.Navigator>
      );
}
