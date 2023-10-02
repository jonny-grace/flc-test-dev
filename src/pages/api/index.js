
import axios from "axios";

const API_URL = "https://flc-cms.onrender.com/api/footer?populate=*";

export async function fetchFooterData() {
  
  try {
    const response = await axios.get(API_URL);
    
    return response.data;
    
  } catch (error) {
    console.error(error);
    return null;
  }
}

