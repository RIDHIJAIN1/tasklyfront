import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const signup = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/users/signup`, userData);
    return response.data; // Return response data (can be success message, token, etc.)
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};
export const loginRequest = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/users/login`, userData);
    return response.data; // Return response data (can be success message, token, etc.)
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};
