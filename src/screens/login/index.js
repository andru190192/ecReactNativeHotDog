/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import LottieView from 'lottie-react-native';
import { Item, Input } from 'native-base';

const LoginScreen = ({ onHandlerLogin, username, password, setUsername, setPassword }) => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
      }}>
      <View style={{flex: 1, height: 30}}>
        <LottieView
          source={require('../../res/animations/hotdog.json')}
          autoPlay
          loop
        />
      </View>
      <View style={{marginHorizontal: 34, marginBottom: 34}}>
        <Item>
          <Input
            placeholder="Ingrese correo"
            autoCorrect={false}
            returnKeyType="done"
            value={username}
            onChangeText={(username) => setUsername(username)}
          />
        </Item>
        <Item>
          <Input
            placeholder="Ingrese contraseña"
            autoCorrect={false}
            returnKeyType="done"
            secureTextEntry
            value={password}
            onChangeText={(password) => setPassword(password)}
          />
        </Item>
      </View>
      <View style={{flex: 2}}>
        <TouchableOpacity
          onPress={onHandlerLogin}
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
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {}}
          style={{
            alignItems: 'center',
            backgroundColor: '#1273DE',
            marginHorizontal: 34,
            height: 45,
            justifyContent: 'center',
            textAlign: 'center',
            borderRadius: 10,
            marginVertical: 10,
          }}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>
            Ingresar con Google
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {}}
          style={{
            alignItems: 'center',
            backgroundColor: '#626B75',
            marginHorizontal: 34,
            height: 45,
            justifyContent: 'center',
            textAlign: 'center',
            borderRadius: 10,
          }}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>
            Ingresar con GitHub
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
