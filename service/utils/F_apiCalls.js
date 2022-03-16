import { config } from '@service/constants/apiCallConfig';
import { apiBaseUrl } from '@service/constants/apiPaths';
import httpHelper from '@service/utils/httpHelper';

export const apiCall_F_register = (body) => {
  return httpHelper.post(`${apiBaseUrl}/customer/register`, body, config);
};

export const apiCall_F_singOut = () => {
  return httpHelper.get(`${apiBaseUrl}/customer/signout`, config);
};
