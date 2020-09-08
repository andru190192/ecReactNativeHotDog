import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import { Image, InfoContainer } from './index.styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const QueryScreen = ({onHandlerPicker, onHandlerOpenCamera, isHotDog, url}) => {
  console.log('url image', url);
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
      }}>
      {url && <InfoContainer isHotDog={isHotDog}>
        <Icon name={`${isHotDog ? 'check' : 'close'}`} size={30} />
        <Text>{`${isHotDog ? '' : 'Not'} Hotdog`}</Text>
      </InfoContainer>}
      <Image source={{ uri: `${url}`}} />
      <TouchableOpacity
        onPress={onHandlerPicker}
        style={{
          alignItems: 'center',
          backgroundColor: '#47B27D',
          marginHorizontal: 34,
          height: 45,
          justifyContent: 'center',
          textAlign: 'center',
          borderRadius: 10,
          marginVertical: 10,
        }}>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: 16,
            paddingHorizontal: 20,
          }}>
          Seleccionar imagen
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onHandlerOpenCamera}
        style={{
          alignItems: 'center',
          backgroundColor: '#47B27D',
          marginHorizontal: 34,
          height: 45,
          justifyContent: 'center',
          textAlign: 'center',
          borderRadius: 10,
          marginVertical: 10,
        }}>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: 16,
            paddingHorizontal: 20,
          }}>
          Camara
        </Text>
      </TouchableOpacity>
      <Text
        style={{
          color: isHotDog ? 'green' : 'red',
          fontWeight: 'bold',
          fontSize: 16,
          paddingHorizontal: 20,
        }}>
      </Text>
    </View>
  );
};

export default QueryScreen;
