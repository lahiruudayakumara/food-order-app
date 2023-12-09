import axios from 'axios';

const apiUrl = "http://localhost:8000"

export const userlogin =  async (data) => {
    const response = await axios.post(`${apiUrl}/user/login`, data);
    return response.data.token;
}

export const userSignup =  async (data) => {
    const response = await axios.post(`${apiUrl}/user/signup`, data);
    return response;
}