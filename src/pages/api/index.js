
import axios from "axios";

export async function fetchFooterData() {
  try {
    
    const response = await axios.

    get('https://flc-cms.onrender.com/api/footer?populate=*');
    
    return response.data;
    
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getallProducts() {
  
  try {
    const response = await axios.get(`${apiUrl}/products?populate=*`)
    // const response = await axios.get('https://flc-cms.onrender.com/api/products?populate=*');
    
    return response.data;
    
  } catch (error) {
    console.error(error);
    return null;
  }
}

