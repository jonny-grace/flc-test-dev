
import axios from "axios";

const API_URL = "https://flc-cms.onrender.com/api/footer?populate=*";

export async function fetchFooterData() {
  
  try {
    const response = await axios.get('https://flc-cms.onrender.com/api/footer?populate=*');
    
    return response.data;
    
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getallProducts() {
  
  try {
    const response = await axios.get('https://flc-cms.onrender.com/api/products?populate=*');
    
    return response.data;
    
  } catch (error) {
    console.error(error);
    return null;
  }
}

