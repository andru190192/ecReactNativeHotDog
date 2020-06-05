/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {View, TouchableOpacity, Text} from 'react-native';

const ProfileScreen = ({user, onHandlerLogout}) => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>Profile</Text>
      <Text>{user.username}</Text>
      <Text>{user.nickname}</Text>
      <View>
        <Icon name="home" color="#747474" size={26} />
      </View>

      <TouchableOpacity
        onPress={onHandlerLogout}
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
          Cerrar Sesión
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
