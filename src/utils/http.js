import axios from 'axios';

const baseURL = process.env.REACT_APP_API_BASE_URL || '/api';

const http = axios.create({ baseURL, timeout: 10000 });

http.interceptors.request.use((config) => {
  return config;
});

http.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export default http;