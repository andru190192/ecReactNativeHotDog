/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Item, Input} from 'native-base';
import {
  MainContainer,
  ProfileContainer,
  ContainerHeader,
  HeaderButton,
  SessionClose,
  ProfileTitle,
  ProfileImage,
  ProfileCamera,
  ProfileCameraIcon,
  Image,
  ProfileInformationContainer,
  Information,
} from './index.styles';

const ProfileScreen = ({user, onHandlerLogout}) => {
  return (
    <MainContainer>
      <ProfileContainer>
        <ContainerHeader>
          <ProfileTitle>Profile</ProfileTitle>
          <HeaderButton>
            <SessionClose name="logout" size={24} />
          </HeaderButton>
        </ContainerHeader>
        <ProfileImage>
          <Image
            source={{
              uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
            }}
          />
        </ProfileImage>
        <ProfileCamera>
          <ProfileCameraIcon name="linked-camera" size={34} />
        </ProfileCamera>
      </ProfileContainer>
      <ProfileInformationContainer>
        <Information>
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
        </Information>
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
      </ProfileInformationContainer>
    </MainContainer>
  );
};

export default ProfileScreen;
