import {View, Text, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import RecentExpanses from '../Screens/RecentExpenses';
import AllExpenses from '../Screens/AllExpenses';
import {GlobalStyles} from '../constant/GlobalColor';
import Images from '../Images';
import IconButton from '../Conponents/UI/IconButton';

const Tab = createBottomTabNavigator();
const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({navigation}) => ({
        headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
        headerTintColor: 'white',
        tabBarStyle: {backgroundColor: GlobalStyles.colors.primary500},
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: ({tintColor}) => <IconButton icon={Images.ic_add} size={24} color={tintColor} onPress={() => navigation.navigate('ManageExpanses')}/>
      })}>

      <Tab.Screen
        name="RecentExpanses"
        component={RecentExpanses}
        options={{
          title: 'Recent Expanses',
          tabBarLabel: 'Recent',
          tabBarIcon: ({color, size}) => (
            <Image
              source={Images.ic_hourglass}
              style={{height: 20, width: 20}}
            />
          ),
        }}
      />

      <Tab.Screen
        name="AllExpanses"
        component={AllExpenses}
        options={{
          title: 'All Expanses',
          tabBarLabel: 'All Expanses',
          tabBarIcon: ({color, size}) => (
            <Image
              source={Images.ic_Calendar}
              style={{height: 20, width: 20}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
