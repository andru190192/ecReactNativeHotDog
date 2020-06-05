import React, {useState, useEffect, useContext} from 'react';
import auth from '@react-native-firebase/auth';
import crashlytics from '@react-native-firebase/crashlytics';
import LoginScreen from '../../screens/login';
import {AuthContext} from '../../contexts/authContext';

const Login = ({navigation}) => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const {setUserId} = useContext(AuthContext);

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, [onAuthStateChanged]);

  useEffect(() => {
    if (user) {
      setUserId(user.uid);
      navigation.navigate('Home', {
        screen: 'Profile',
      });
    }
  }, [navigation, setUserId, user]);

  function onHandlerLogin() {
    auth()
      .signInWithEmailAndPassword(username, password)
      .then(userLogin => {
        console.warn('User account created & signed in!', userLogin);
        setUserId(userLogin.user.uid);
        navigation.navigate('Home', {
          screen: 'Profile',
        });
        crashlytics().setUserId(userLogin.user.uid);
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.warn('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.warn('That email address is invalid!');
        }

        console.error(error);
      });
  }

  if (initializing) {
    return null;
  }

  if (!user) {
    return (
      <LoginScreen
        onHandlerLogin={onHandlerLogin}
        username={username}
        password={password}
        setUsername={username => setUsername(username)}
        setPassword={password => setPassword(password)}
      />
    );
  }
  return null;
};

export default Login;
