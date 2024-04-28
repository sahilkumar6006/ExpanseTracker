import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import ManageExpanses from '../Screens/ManageExpanses';
import BottomNavigator from './BottomNavigator';
import { GlobalStyles } from '../constant/GlobalColor';
import ExpanseContextProvider from '../store/expanse-context';

const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  return (
    <>
      <StatusBar style="auto" />
      <ExpanseContextProvider>
      <NavigationContainer >
        <Stack.Navigator screenOptions ={{
        headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
        headerTintColor: 'white'
      }}>
          <Stack.Screen
            name="ExpansesOverview"
            component={BottomNavigator}
            options={{headerShown: false}}
          />
          <Stack.Screen name="ManageExpanses" component={ManageExpanses} options={{
            // title: 'Mange Expanses',
            presentation: 'modal'
          }}  />
        </Stack.Navigator>
      </NavigationContainer>
      </ExpanseContextProvider>
    </>
  );
};

export default StackNavigator;
