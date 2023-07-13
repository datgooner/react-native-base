import { type AxiosError } from 'axios';
import { COMMON_MESSAGES } from 'constants/common.const';
import { type RequestError } from 'types/request';

export function getMessageFromError(error: string | AxiosError<RequestError>) {
  if (typeof error === 'string') {
    return error;
  }
  if (error.response) {
    return error?.response?.data?.message || COMMON_MESSAGES;
  }
  return error.message || COMMON_MESSAGES;
}
