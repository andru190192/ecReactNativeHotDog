import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigation from './navigation/navigation-app';
import AuthContextProvider from './contexts/authContext';


const App = () => {
  return (
      <AuthContextProvider>
        <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
          <NavigationContainer>
            <AppNavigation />
          </NavigationContainer>
        </SafeAreaView>
      </AuthContextProvider>
  );
};
export default App;
