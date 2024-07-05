import { City, Place } from "@/types/httpTypes";
import axios, { isAxiosError } from "axios";
const API_URL = import.meta.env.VITE_SERVER_URL;

// Place 불러오기
export const fetchPlace = async (
  city: number,
  type: number,
  countryCode: string
): Promise<Place[]> => {
  try {
    const response = await axios.get(
      `${API_URL}/place?city=${city}&type=${type}&country-code=${countryCode}`
    );
    const data = response.data;
    return data.slice(0, 100);
  } catch (error) {
    if (isAxiosError(error)) {
      console.error("Error message: ", error.message);
    } else {
      console.error("Unexpected error: ", error);
    }
    throw error;
  }
};

// City 불러오기
export const fetchCity = async (countryCode: string): Promise<City[]> => {
  try {
    const response = await axios.get(`${API_URL}/city/${countryCode}`);
    const data = response.data;
    return data.slice(0, 100);
  } catch (error) {
    if (isAxiosError(error)) {
      console.error("Error message: ", error.message);
    } else {
      console.error("Unexpected error: ", error);
    }
    throw error;
  }
};
