
import { StyleSheet } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './Screens/HomeScreen/HomeScreen';

import Stretching from './Screens/StretchingScreen/StretchingScreen';
import AppHeader from './Components/AppHeader';



const Tab = createBottomTabNavigator();

/**
 * App.js
 * @returns Bottom tabs navigator for the different screens of the app
 */
export default function App() {

  
  
  return (
    
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Home'
        screenOptions = {({ route }) => ({
          tabBarActiveTintColor:'#4476a1',
          tabBarInactiveColor:'gray',
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name == 'Stretching') {
              iconName = focused ? 'body' : 'body-outline';
            } else if (route.name == 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            }
            return <Ionicons name={iconName} size={size} color={color}/>;
          },
        })}
       
        >
          <Tab.Screen name='Home' component={HomeScreen} options={{headerShown:false}}/>
          <Tab.Screen name='Stretching' component={Stretching} options={{header:AppHeader, }}/>
      
      </Tab.Navigator>
    </NavigationContainer>
    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
