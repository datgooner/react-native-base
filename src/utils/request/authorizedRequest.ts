import axios, {
  type AxiosError,
  type AxiosInstance,
  type AxiosResponse,
} from 'axios';
import { stringify } from 'query-string';
import { Alert } from 'react-native';
import Config from 'react-native-config';
import { tokenManager } from 'utils/tokenManager';

const authorizedRequest: AxiosInstance = axios.create({
  baseURL: Config.BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },

  paramsSerializer: {
    serialize: params => {
      return stringify(params, { arrayFormat: 'separator' });
    },
  },
});

authorizedRequest.interceptors.request.use(config => {
  const newConfig = { ...config };
  const { token } = tokenManager;
  newConfig.headers.Authorization =
    token && token !== 'guest' ? `Bearer ${token}` : '';
  return newConfig;
});

let alertStatus = false;

authorizedRequest.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  (error: AxiosError) => {
    if (error?.response && error.response.status === 401) {
      if (!alertStatus) {
        alertStatus = true;
        Alert.alert(
          '',
          'Your session expired',
          [
            {
              text: 'OK',
              onPress: () => {
                alertStatus = false;
              },
            },
          ],
          {
            onDismiss: () => {
              alertStatus = false;
            },
          },
        );
      }
      // TODO logout
      // store.dispatch(logout.request());
      tokenManager.doLogout();
    }
    throw error;
  },
);

export default authorizedRequest;
