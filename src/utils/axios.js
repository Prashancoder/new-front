import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // ✅ For sending cookies
});


// Add a request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Handle 401 errors
      if (error.response.status === 401) {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        localStorage.removeItem('isAuthenticated');
        window.location.href = '/login';
      }
      // Handle 500 errors
      if (error.response.status === 500) {
        console.error('Server Error:', error.response.data);
      }
    }
    return Promise.reject(error);
  }
);

export default api;
