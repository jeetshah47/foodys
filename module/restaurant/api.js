import axios from "axios";
import { API_URL } from "../urls";


export const getRestaurant = async () => {
  const result = await axios.get(`${API_URL}/restaurants`);
  return result.data;
};

export const getRestaurantByCity = async (city) => {
  const result = await axios.get(`${API_URL}/restaurants/${city}`);
  return result.data;
}