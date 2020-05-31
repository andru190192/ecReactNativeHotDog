import axios from 'axios';
import crashlytics from '@react-native-firebase/crashlytics';
import analytics from '@react-native-firebase/analytics';

const NETWORK_DEFAULT_TIMEOUT = 10000;

const client = axios.create({
  timeout: NETWORK_DEFAULT_TIMEOUT,
});

client.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
client.defaults.headers.get['Content-Type'] = 'application/json;charset=utf-8';

client.interceptors.request.use(async (config) => {
  console.log('[NETWORK] [REQUEST SUCCESS]:', config, new Date());
  return config;
}, (error) => {
  console.log('[NETWORK] [REQUEST ERROR]:', error);
  return Promise.reject(error);
});

// Add a response interceptor
client.interceptors.response.use((response = {}) => {
  console.log('[NETWORK] [RESPONSE SUCCESS]:', response, new Date());
  const { data, headers } = response;
  return {
    ...data,
    headers,
  };
}, (error) => {
  console.warn('[NETWORK] [RESPONSE ERROR]:', { ...error });
  sendReport(error);
  recordError(error);
  return Promise.reject(error);
});

function sendReport(error) {
  analytics().logEvent('_service_error', error);
  crashlytics().recordError(error);
}

function recordError(error) {
  crashlytics().recordError(error);
}

export default client;
