import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  isAxiosError,
  InternalAxiosRequestConfig,
  AxiosHeaders,
} from "axios";
import { ErrorResponse } from "react-router-dom";

const API_URL = import.meta.env.VITE_SERVER_URL;

export const apiRequester: AxiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 5000,
});

const httpErrorHandler = (
  error: AxiosError<ErrorResponse> | Error
): Promise<Error> => {
  if (isAxiosError(error)) {
    console.error("Error message: ", error.message);
  } else {
    console.error("Unexpected error: ", error);
  }
  return Promise.reject(error);
};

const setRequestDefaultHeader = (
  requestConfig: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  const config = requestConfig;
  if (config.headers) {
    (config.headers as AxiosHeaders).set(
      "Content-Type",
      "application/json;charset=utf-8"
    );
  } else {
    config.headers = new AxiosHeaders();
    config.headers.set("Content-Type", "application/json;charset=utf-8");
  }
  return config;
};

apiRequester.interceptors.request.use(setRequestDefaultHeader, (error) =>
  Promise.reject(error)
);
apiRequester.interceptors.response.use(
  (response: AxiosResponse) => response,
  httpErrorHandler
);
