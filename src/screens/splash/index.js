import React, {useEffect, useRef} from 'react';
import {View} from 'react-native';
import LottieView from 'lottie-react-native';

const SplashScreen = ({navigation}) => {
  const animation = useRef(null);
  useEffect(() => {
    if (animation.current) {
      animation.current.play(1, 120);
      setTimeout(() => {
        navigation.navigate('Login');
      }, 5000);
    }
  }, []);

  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <LottieView
        ref={animation}
        source={require('../../res/animations/react-native-firebase.json')}
        autoPlay
        loop={false}
      />
    </View>
  );
};

export default SplashScreen;
