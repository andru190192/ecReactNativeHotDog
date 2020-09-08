import React, {useState, useEffect, useContext} from 'react';
import storage from '@react-native-firebase/storage';
import ImagePicker from 'react-native-image-crop-picker';
import QueryScreen from '../../screens/query';

const Profile = () => {
  const VISION_API_KEY = 'AIzaSyD1JobpnvqF3dArUScULFmF0n8zmBW4z08';
  const reference = storage().ref('image.jpg');
  const [isHotDog, setHotDog] = useState(false);
  const [url, setUrl] = useState(undefined);

  const onHandlerPicker = async () => {
    const image = await ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    });
    await validateIsHotDog(image);
  };

  const onHandlerOpenCamera = async () => {
    const image = await ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    });
    await validateIsHotDog(image);
  };

  const validateIsHotDog = async image => {
    // uploads file
    await reference.putFile(image.path);
    // get url store
    const url = await storage()
      .ref('image.jpg')
      .getDownloadURL();
    setUrl(url);
    // build request from api vision
    let body = JSON.stringify({
      requests: [
        {
          features: [{type: 'LABEL_DETECTION'}],
          image: {
            source: {
              imageUri: `${url}`,
            },
          },
        },
      ],
    });
    const response = await fetch(
      `https://vision.googleapis.com/v1/images:annotate?key=${VISION_API_KEY}`,
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: body,
      },
    );
    const responseJson = await response.json();
    // validates if a hot dog label exists
    const isHotDogLabel = responseJson.responses[0].labelAnnotations
      .map(label => label.description)
      .includes('Hot dog');
    setHotDog(isHotDogLabel);
  };

  return (
    <QueryScreen
      onHandlerPicker={onHandlerPicker}
      onHandlerOpenCamera={onHandlerOpenCamera}
      isHotDog={isHotDog}
      url={url}
    />
  );
};

export default Profile;
