import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';

import Welcome from '../Screens/WelcomeScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='welcome' component={Welcome} />
        {/* <Stack.Screen name='' component={} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator
const styles = StyleSheet.create({})