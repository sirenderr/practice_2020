import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from '@react-navigation/stack';

import OKScreen from './components/OKScreen';
import Card from './components/Card'
import Doctor from './components/Doctor';

const Tab = createMaterialBottomTabNavigator();


function Home({route, navigation}) {
  return (
      <Tab.Navigator
        initialRouteName="OK"
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{ backgroundColor: '#694fad' }}>
        <Tab.Screen
          name="Онлайн-консультації"
          component={OKScreen}
          options={{
            tabBarLabel: 'Спеціалісти',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="doctor" color={color} size={25} />
            ),
          }}
        />
        <Tab.Screen
          name="Bio"
          component={Card}
          options={{
            tabBarLabel: 'Моя картка',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="account-card-details"
                color={color}
                size={25}
              />
            ),
          }}
        />
      </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name='Home' component={Home} options={{headerShown: false}}/>
        <Stack.Screen
          name="Doctor"
          component={Doctor}
          options={({ route }) => ({ title: route.params.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
