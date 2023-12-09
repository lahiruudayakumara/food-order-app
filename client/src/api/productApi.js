import axios from 'axios';

const apiUrl = "http://localhost:8000"

export const getProducts = async () => {
    const response = await axios.get(`${apiUrl}/product/list`)
    return response.data;
}

export const getCategoryProducts = async ({data}) => {
    const response = await axios.get(`${apiUrl}/product/list`, {category: data})
    return response.data;
}