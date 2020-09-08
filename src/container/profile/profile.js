import React, {useState, useEffect, useContext} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import ImagePicker from 'react-native-image-crop-picker';
import ProfileScreen from '../../screens/profile';
import {AuthContext} from '../../contexts/authContext';

const Profile = ({navigation}) => {
  const {userId} = useContext(AuthContext);
  const [user, setUser] = useState();
  const [image, setImage] = useState('');
  useEffect(() => {
    const subscriber = firestore()
      .collection('users')
      .doc(userId)
      .onSnapshot(documentSnapshot => {
        //console.log('User data: ', documentSnapshot.data());
        setUser(documentSnapshot.data());
        console.log(user);
      });

    // Stop listening for updates when no longer required
    return () => subscriber();
  }, [user, userId]);

  const onHandlerPicker = async () => {
    const image = await ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    });
    console.log('image', image);
    await setImage(image.path);
  };

  const onHandlerLogout = () => {
    auth()
      .signOut()
      .then(() => {
        console.warn('User signed out!');
        navigation.navigate('Login');
      });
  };

  if (user === undefined) {
    return null;
  }

  return (
    <ProfileScreen
      user={user}
      onHandlerLogout={onHandlerLogout}
      onHandlerPicker={onHandlerPicker}
      image={image}
    />
  );
};

export default Profile;
