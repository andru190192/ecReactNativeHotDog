import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import { Item, Input } from 'native-base';

const RegisterScreen = () => {
    return (
    <View
        style={{ backgroundColor: 'white', flex: 1, alignItems: 'center' }}>
        <Text>Hotdog</Text>
        <Item>
            <Input
                placeholder="Ingrese correo"
                autoCorrect={false}
                returnKeyType="done"
            />
        </Item>
        <Item>
            <Input
                placeholder="Ingrese contraseña"
                autoCorrect={false}
                returnKeyType="done"
                secureTextEntry
            />
        </Item>
    </View>
    );
};

export default RegisterScreen;
