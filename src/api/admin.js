import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
// Interceptor to add the Bearer token to each request
const token = localStorage.getItem("token"); // Retrieve the token from local storage or another source

api.interceptors.request.use(
  (config) => {
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const getUsers = async () => {
  try {
    const response = await api.get(`${API_URL}/users/`);
    return response.data.users;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

export const editUser = async (userData, id) => {
  try {
    const response = await api.put(`${API_URL}/users/${id}`, userData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};
export const deleteUser = async ( id) => {
  try {
    const response = await api.delete(`${API_URL}/users/${id}`);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};
