import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Logout from 'react-native-vector-icons/MaterialCommunityIcons';

export const MainContainer = styled.View`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: center;
`;

export const ProfileContainer = styled.View`
  flex: 1;
  background-color: #ffca28;
  align-self: stretch;
`;

export const ContainerHeader = styled.View`
  flex-direction: row;
`;

export const ProfileTitle = styled.Text`
  font-size: 20px;
  margin-left: 42%;
  margin-top: 10px;
  color: white;
  font-weight: bold;
`;

export const HeaderButton = styled.TouchableOpacity`
  flex: 1;
  text-align: center;
  margin-top: 11px;
`;

export const SessionClose = styled(Logout)`
  position: absolute;
  z-index: 10;
  right: 16;
  color: #039BE5;
  font-weight: 900;
`;

export const ProfileImage = styled.View`
  margin-top: 32;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image`
  width: 100;
  height: 100;
  border-radius: 100;
`;

export const ProfileCamera = styled.TouchableOpacity`
  margin-left: 24;
`;

export const ProfileLogout = styled.TouchableOpacity`
  margin-left: 24;
`;

export const ProfileCameraIcon = styled(Icon)`
  color: #039BE5;
`;

export const ProfileInformationContainer = styled.View`
  flex: 2;
  background-color: #eceff1;
  align-self: stretch;
`;

export const Information = styled.View`
  margin-top: 24;
  margin-horizontal: 24;
  margin-bottom: 34;
`;
