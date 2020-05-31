import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import crashlytics from '@react-native-firebase/crashlytics';
import analytics from '@react-native-firebase/analytics';

//crashlytics().setCrashlyticsCollectionEnabled(!__DEV__);
//analytics().setAnalyticsCollectionEnabled(!__DEV__);
//require('react-native').unstable_enableLogBox();

AppRegistry.registerComponent(appName, () => App);
