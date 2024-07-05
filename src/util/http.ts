import { City, Place } from "@/types/httpTypes";
import { apiRequester } from "./axiosConfig";
import { AxiosPromise } from "axios";
const API_URL = import.meta.env.VITE_SERVER_URL;

interface Response<T> {
  data: T;
  status: string;
  serverDateTime: string;
  errorCode?: string; //FAIL<
}

// Place 불러오기
export const fetchPlace = async (
  city: number,
  type: number,
  countryCode: string
): AxiosPromise<Response<Place[]>> =>
  apiRequester.get(
    `place?city=${city}&type=${type}&country-code=${countryCode}`
  );

// City 불러오기
export const fetchCity = async (
  countryCode: string
): AxiosPromise<Response<City[]>> => apiRequester.get(`city/${countryCode}`);
