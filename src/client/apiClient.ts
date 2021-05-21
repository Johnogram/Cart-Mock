import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const { CT_CLIENT_ID, CT_SECRET, CT_AUTH_URL, CT_API_URL, CT_SCOPE, CT_PROJECT_KEY } = process.env;

const getAuthToken = async (): Promise<string | null> => {
  const config: AxiosRequestConfig = {
    auth: {
      username: String(CT_CLIENT_ID),
      password: String(CT_SECRET),
    },
    params: {
      grant_type: 'client_credentials',
      scope: String(CT_SCOPE),
    },
  };

  try {
    const response = await axios.post(`${CT_AUTH_URL}/oauth/token`, {}, config);

    return response.data.access_token;
  } catch (error) {
    console.log(error);

    return null;
  }
};

export const apiClient = async (): Promise<AxiosInstance> => {
  const httpClient = axios.create({
    baseURL: `${String(CT_API_URL)}/${String(CT_PROJECT_KEY)}`,
  });
  const authToken = await getAuthToken();

  httpClient.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;

  return httpClient;
};
