import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

const QueryScreen = ({ onHandlerPicker, onHandlerOpenCamera, isHotDog }) => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>Query</Text>
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
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16, paddingHorizontal: 20}}>Seleccionar imagen</Text>
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
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16, paddingHorizontal: 20}}>Camara</Text>
        </TouchableOpacity>
        <Text style={{color: isHotDog ? 'green' : 'red', fontWeight: 'bold', fontSize: 16, paddingHorizontal: 20}}>{isHotDog ? 'Si es un Hot Dog' : 'no es'}</Text>
    </View>
  );
};

export default QueryScreen;
