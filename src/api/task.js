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

export const createTask = async (userData) => {
  try {
    const response = await api.post(`/tasks`, userData); // Use the api instance
    return response.data; // Return response data (can be success message, token, etc.)
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

export const getTask = async () => {
  try {
    const response = await api.get(`/tasks`); // Use the api instance
    return response.data; // Return response data (can be success message, token, etc.)
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

export const getTaskById = async (id) => {
  try {
    const response = await api.get(`/tasks/${id}`); // Use the api instance
    return response.data; // Return response data (can be success message, token, etc.)
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};
export const getTaskByUserId = async () => {
  try {
    const response = await api.get(`/user/tasks`); // Use the api instance
    return response.data; // Return response data (can be success message, token, etc.)
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

export const editTask = async (id, userData) => {
  try {
    const response = await api.put(`/tasks/${id}`, userData); // Use the api instance
    return response.data; // Return response data (can be success message, token, etc.)
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

export const deleteTask = async (id) => {
  try {
    const response = await api.delete(`/tasks/${id}`); // Use the api instance
    return response.data; // Return response data (can be success message, token, etc.)
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};