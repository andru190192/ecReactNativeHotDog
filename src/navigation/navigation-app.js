import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Splash from '../screens/splash';
import Login from '../container/login';
import Profile from '../container/profile';
import Query from '../container/query';
import Register from '../container/register';

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
      <Stack.Screen
        name={'Register'}
        component={Register}
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
    <BottomTab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Profile') {
            iconName = focused ? 'account-circle' : 'account-circle';
          } else if (route.name === 'Query') {
            iconName = focused ? 'cloud-upload' : 'cloud-upload';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#FFA000',
        inactiveTintColor: 'gray',
      }}>
      <BottomTab.Screen
        name="Profile"
        component={StackProfileNavigator}
        options={{
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name="Query"
        component={StackQueryNavigator}
        options={{
          headerShown: false,
        }}
      />
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
