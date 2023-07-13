import axios, {
  type AxiosError,
  type AxiosInstance,
  type AxiosResponse,
} from 'axios';
import Config from 'react-native-config';
import { stringify } from 'query-string';

const unauthorizedRequest: AxiosInstance = axios.create({
  baseURL: Config.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
  timeoutErrorMessage: 'Network timeout',
  paramsSerializer: params => {
    return stringify(params, { arrayFormat: 'comma' });
  },
});

unauthorizedRequest.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  (error: AxiosError) => {
    throw error;
  },
);

export default unauthorizedRequest;
