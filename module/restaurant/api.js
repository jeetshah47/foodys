import axios from "axios";

const API_URL = "https://food-backend-moom.onrender.com";

export const getRestaurant = async () => {
  const result = await axios.get(`${API_URL}/restaurants`);
  return result.data;
};
