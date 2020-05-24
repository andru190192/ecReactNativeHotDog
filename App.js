import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Button,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-community/google-signin';
import Login from './src/screens/login';

const VISION_API_KEY = 'AIzaSyD1JobpnvqF3dArUScULFmF0n8zmBW4z08';
GoogleSignin.configure({
  webClientId: '908408771733-f43c337m9phonmrmtmcf588g6o5s93id.apps.googleusercontent.com',
});

const App = () => {

  /*useEffect(() => {
    auth()
        .signInWithEmailAndPassword('andres@gmail.com', '123456')
        .then(() => {
          console.log('User signed in anonymously');
        })
        .catch(error => {
          if (error.code === 'auth/operation-not-allowed') {
            console.log('Enable anonymous in your firebase console.');
          }
          console.error(error);
        });
  }, []);*/

  async function onGoogleButtonPress() {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  async function processImage() {
    let body = JSON.stringify({
      requests: [
        {
          features: [{ type: 'LABEL_DETECTION' }],
          image: {
            source: {
              imageUri: 'https://placeralplato.com/files/2015/11/Pan-para-hot-dogs-640x480.jpg'
            }
          }
        }
      ]
    })
    const response = await fetch(
        `https://vision.googleapis.com/v1/images:annotate?key=${VISION_API_KEY}`,
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          method: 'POST',
          body: body
        }
    )
    const responseJson = await response.json();
    console.log('responseJson', responseJson);
    const getLabel = responseJson.responses[0].labelAnnotations.map(
        obj => console.log(obj.description)
    )
  }

  async function onHandlerLogout() {
    try {
      auth().signOut().then(() => console.log('User signed out!'));
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      //this.setState({ user: null }); // Remember to remove the user from your app's state as well
    } catch (error) {
      console.error(error);
    }
  }

  return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
              contentInsetAdjustmentBehavior="automatic">
            <View style={styles.body}>
              <Button
                  title="Google Sign-In"
                  onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
              />
              <Login
                  onHandlerLogout={onHandlerLogout}
              />
              <TouchableOpacity onPress={processImage}>
                <Text>Comprobar imagen</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
  );
};

const styles = StyleSheet.create({
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: 'white',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: 'black',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: 'black',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
