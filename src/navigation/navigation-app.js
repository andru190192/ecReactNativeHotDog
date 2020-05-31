import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Splash from '../screens/splash';
import Login from '../container/login';
import Profile from '../screens/profile';
import Query from '../screens/query';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
const AppStackNavigation = createStackNavigator();

const StackLogoutNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Splash'}
        component={Splash}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={'Login'}
        component={Login}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const StackProfileNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Profile'}
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const StackQueryNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Query'}
        component={Query}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const TabBottomNavigator = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Profile" component={StackProfileNavigator} />
      <BottomTab.Screen name="Query" component={StackQueryNavigator} />
    </BottomTab.Navigator>
  );
};

const AppNavigation = () => {
  return (
    <AppStackNavigation.Navigator>
      <AppStackNavigation.Screen
        name={'Logout'}
        component={StackLogoutNavigator}
        options={{
          headerShown: false,
        }}
      />
      <AppStackNavigation.Screen
        name={'Home'}
        component={TabBottomNavigator}
        options={{
          headerShown: false,
        }}
      />
    </AppStackNavigation.Navigator>
  );
};

export default AppNavigation;
