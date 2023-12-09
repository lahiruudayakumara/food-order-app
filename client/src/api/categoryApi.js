import axios from 'axios';

const apiUrl = "http://localhost:8000"

export const getCategory = async () => {
    const response = await axios.get(`${apiUrl}/category/category-list`);
    return response;
} 
