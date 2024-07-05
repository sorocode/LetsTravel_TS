import { Place } from "@/types/httpTypes";
import axios, { isAxiosError } from "axios";
const API_URL = "http://localhost:8080/api";

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
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.error("Error message: ", error.message);
    } else {
      console.error("Unexpected error: ", error);
    }
    throw error;
  }
};
