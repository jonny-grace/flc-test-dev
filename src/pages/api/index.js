
import axios from "axios";

const API_URL = "https://flc-cms.onrender.com/api/services?populate=product_type";

export async function fetchProducts() {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

