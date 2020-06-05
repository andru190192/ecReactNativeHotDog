import React, {useState, useEffect, useContext} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import ProfileScreen from '../../screens/profile';
import {AuthContext} from '../../contexts/authContext';

const Profile = ({navigation}) => {
  const {userId} = useContext(AuthContext);
  const [user, setUser] = useState();

  useEffect(() => {
    const subscriber = firestore()
      .collection('users')
      .doc(userId)
      .onSnapshot(documentSnapshot => {
        console.log('User data: ', documentSnapshot.data());
        setUser(documentSnapshot.data());
        console.log(user);
      });

    // Stop listening for updates when no longer required
    return () => subscriber();
  }, [user, userId]);

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

  return <ProfileScreen user={user} onHandlerLogout={onHandlerLogout} />;
};

export default Profile;
