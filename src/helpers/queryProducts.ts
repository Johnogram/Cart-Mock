import { AxiosResponse } from 'axios';
import { apiClient } from '../client/apiClient';

export const queryProducts = async (): Promise<AxiosResponse> => {
  const response = await apiClient().then((client) => {
    return client.get('/products');
  });

  return response;
};
