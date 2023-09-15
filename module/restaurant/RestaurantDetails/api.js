import axios from "axios";
import { API_URL } from "../../urls";


export const getFoodByid = async (id) => {
  const result = await axios.get(`${API_URL}/restaurant/${id}/items`);
  return result.data;
};

export const placeOrder = async (data) => {
  const result = await axios.post(`${API_URL}/order`, {...data});
  return result.data;  
}