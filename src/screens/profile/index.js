/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableOpacity} from 'react-native';
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
  return (
    <MainContainer>
      <ProfileContainer>
        <ContainerHeader>
          <ProfileTitle>Profile</ProfileTitle>
          <HeaderButton onPress={onHandlerLogout}>
            <SessionClose name="logout" size={28} />
          </HeaderButton>
        </ContainerHeader>
        <ProfileImage>
        {image ? <Image source={{ uri: `${image}`}} /> : null}
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
