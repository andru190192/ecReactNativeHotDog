/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import {Item, Input} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ProfileScreen = ({user, onHandlerLogout}) => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          backgroundColor: '#FFCA28',
          flex: 1,
          alignSelf: 'stretch',
        }}>
        <Text
          style={{
            marginTop: 14,
            color: 'white',
            fontSize: 18,
            textAlign: 'center',
          }}>
          Profile
        </Text>
        <View
          style={{
            marginTop: 34,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={{
              uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
            }}
            style={{width: 100, height: 100, borderRadius: 200 / 2}}
          />
        </View>
        <TouchableOpacity style={{marginLeft: 24}}>
          <Icon name="linked-camera" size={34} color="#2C384A" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: '#ECEFF1',
          flex: 2,
          alignSelf: 'stretch',
        }}>
        <View style={{marginTop: 24, marginHorizontal: 24, marginBottom: 34}}>
          <Item style={{marginBottom: 24}}>
            <Input
              placeholder={user.username}
              autoCorrect={false}
              returnKeyType="done"
              disabled
            />
          </Item>
          <Item>
            <Input
              placeholder={user.nickname}
              autoCorrect={false}
              returnKeyType="done"
              disabled
            />
          </Item>
        </View>
        {/* <TouchableOpacity
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
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

export default ProfileScreen;
