import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/home';
import Login from '../screens/login';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Home'}
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name={'Login'} component={Login} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
