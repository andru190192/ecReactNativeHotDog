import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

const ProfileScreen = ({ user, onHandlerLogout }) => {
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
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16, paddingHorizontal: 20}}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
