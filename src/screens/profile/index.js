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

const ProfileScreen = ({user, onHandlerLogout, onHandlerPicker, image}) => {
  console.log('imagen en el screen :', image);
  return (
    <MainContainer>
      <ProfileContainer>
        <ContainerHeader>
          <ProfileTitle>Profile</ProfileTitle>
          <HeaderButton>
            <SessionClose name="logout" size={28} />
          </HeaderButton>
        </ContainerHeader>
        <ProfileImage>
          <Image
            source={{
              uri: `${image}`,
            }}
          />
        </ProfileImage>
        <ProfileCamera onPress={onHandlerPicker}>
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
      </ProfileInformationContainer>
    </MainContainer>
  );
};

export default ProfileScreen;
