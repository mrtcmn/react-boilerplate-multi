import { store } from '@service/StoreConfig';
import axios from 'axios';
import {
  PermissionCheck,
  ResponseTokenCheck,
} from '@service/utils/serviceUtil';

const GetEnv = require('@envFile');

export const requestTypes = {
  INSERT: 'INSERT',
  UPDATE: 'UPDATE',
  DELETE: 'DELETE',
};

const instance = axios.create();

instance.interceptors.request.use((req) => {
  const storeState = store.getState();

  if (GetEnv.PROJECT === 'PROJECT1' || GetEnv.PROJECT === 'PROJECT2') {
    req.headers.token = '';
  } else if (GetEnv.REACT_APP_PROJECT === 'MOBILE') {
    req.headers.token = '';
  }

  return req;
});

instance.interceptors.response.use((res) => {
  if (ResponseTokenCheck(res)) {
    return res;
  }

  if (PermissionCheck(res)) {
    return console.log('error');
  }

  return res;
});

export default instance;
