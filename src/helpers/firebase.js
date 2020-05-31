import analytics from '@react-native-firebase/analytics';
import { isValid, cutString } from './util';

const MAX_NUMBER_OF_TAG_CHARACTERS = 30;

class Firebase {
  static tag({ screen, file, tag }, params) {
    // Firebase accept tags until 32 characters
    const ruledTag = (tag.length > MAX_NUMBER_OF_TAG_CHARACTERS)
      ? cutString(tag, MAX_NUMBER_OF_TAG_CHARACTERS) : tag;
    analytics().setCurrentScreen(screen, file);
    if (isValid(params)) {
      analytics().logEvent(ruledTag, params);
      return;
    }
    analytics().logEvent(ruledTag);
  }
}

export default Firebase;
