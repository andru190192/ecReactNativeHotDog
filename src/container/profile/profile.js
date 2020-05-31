import React, { useState, useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';
import ProfileScreen from '../../screens/profile';

const Profile = ({ route }) => {
  const { userId } = route.params;
  useEffect(() => {
    console.warn('userId', userId)
    const subscriber = firestore()
        .collection('users')
        .doc(userId)
        .onSnapshot(documentSnapshot => {
          console.log('User data: ', documentSnapshot.data());
        });

    // Stop listening for updates when no longer required
    return () => subscriber();
  }, []);

  return (
    <ProfileScreen />
  );
};

export default Profile;
