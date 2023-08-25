import axios from "axios";

const API_URL = "https://food-backend-moom.onrender.com";

export const getFoodByid = async (id) => {
    const result = await axios.get(`${API_URL}/restaurant/${id}/items`);
    return result.data;
}
