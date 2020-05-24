import * as React from 'react';
import {View} from 'react-native';
import LottieView from 'lottie-react-native';

const HomeScreen = () => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <LottieView
        source={require('../../res/animations/react-native-firebase.json')}
        autoPlay
        loop
      />
    </View>
  );
};

export default HomeScreen;
