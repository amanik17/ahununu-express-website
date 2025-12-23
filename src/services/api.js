// src/services/api.js
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Add auth token if exists
    const token = localStorage.getItem('auth_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response) {
      // Server responded with error
      const message = error.response.data?.message || 'An error occurred';
      throw new Error(message);
    } else if (error.request) {
      // Request made but no response
      throw new Error('Network error. Please check your connection.');
    } else {
      throw new Error(error.message);
    }
  }
);

// ===== TRACKING API =====
export const trackingAPI = {
  getStatus: async (trackingNumber) => {
    try {
      return await api.get(`/tracking/${trackingNumber}`);
    } catch (error) {
      console.error('Tracking error:', error);
      throw error;
    }
  },
  
  getHistory: async (trackingNumber) => {
    try {
      return await api.get(`/tracking/${trackingNumber}/history`);
    } catch (error) {
      console.error('Tracking history error:', error);
      throw error;
    }
  }
};

// ===== QUOTE API =====
export const quoteAPI = {
  calculate: async (quoteData) => {
    try {
      return await api.post('/quotes/calculate', quoteData);
    } catch (error) {
      console.error('Quote calculation error:', error);
      throw error;
    }
  },
  
  submit: async (quoteData) => {
    try {
      return await api.post('/quotes', quoteData);
    } catch (error) {
      console.error('Quote submission error:', error);
      throw error;
    }
  },
  
  getById: async (quoteId) => {
    try {
      return await api.get(`/quotes/${quoteId}`);
    } catch (error) {
      console.error('Get quote error:', error);
      throw error;
    }
  }
};

// ===== CONTACT API =====
export const contactAPI = {
  submit: async (contactData) => {
    try {
      return await api.post('/contact', contactData);
    } catch (error) {
      console.error('Contact form error:', error);
      throw error;
    }
  },
  
  subscribe: async (email) => {
    try {
      return await api.post('/newsletter/subscribe', { email });
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      throw error;
    }
  }
};

// ===== SERVICES API =====
export const servicesAPI = {
  getAll: async () => {
    try {
      return await api.get('/services');
    } catch (error) {
      console.error('Get services error:', error);
      throw error;
    }
  },
  
  getById: async (serviceId) => {
    try {
      return await api.get(`/services/${serviceId}`);
    } catch (error) {
      console.error('Get service error:', error);
      throw error;
    }
  }
};

// ===== BOOKING API =====
export const bookingAPI = {
  create: async (bookingData) => {
    try {
      return await api.post('/bookings', bookingData);
    } catch (error) {
      console.error('Booking creation error:', error);
      throw error;
    }
  },
  
  getById: async (bookingId) => {
    try {
      return await api.get(`/bookings/${bookingId}`);
    } catch (error) {
      console.error('Get booking error:', error);
      throw error;
    }
  },
  
  cancel: async (bookingId) => {
    try {
      return await api.post(`/bookings/${bookingId}/cancel`);
    } catch (error) {
      console.error('Cancel booking error:', error);
      throw error;
    }
  }
};

// ===== AUTH API (if needed) =====
export const authAPI = {
  login: async (credentials) => {
    try {
      const response = await api.post('/auth/login', credentials);
      if (response.token) {
        localStorage.setItem('auth_token', response.token);
      }
      return response;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  },
  
  register: async (userData) => {
    try {
      return await api.post('/auth/register', userData);
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  },
  
  logout: () => {
    localStorage.removeItem('auth_token');
  },
  
  getCurrentUser: async () => {
    try {
      return await api.get('/auth/me');
    } catch (error) {
      console.error('Get current user error:', error);
      throw error;
    }
  }
};

export default api;