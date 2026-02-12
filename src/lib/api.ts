import axios from 'axios';
import { Role } from '../server/types';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add token to requests if available
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export interface User {
    id: string;
    name: string;
    email: string;
    role: Role;
}

export interface LoginResponse {
    message: string;
    user: User;
    token: string;
}

export interface SiteContent {
    id: string;
    key: string;
    value: string;
    section: string;
}

export interface ContactMessage {
    id: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    isRead: boolean;
    createdAt: string;
}

// Auth API
export const authAPI = {
    login: async (email: string, password: string): Promise<LoginResponse> => {
        const response = await api.post('/auth/login', { email, password });
        return response.data;
    },

    register: async (name: string, email: string, password: string, role?: Role): Promise<LoginResponse> => {
        const response = await api.post('/auth/register', { name, email, password, role });
        return response.data;
    },
};

// Users API
export const usersAPI = {
    getAll: async (): Promise<User[]> => {
        const response = await api.get('/users');
        return response.data;
    },

    getCurrentUser: async (): Promise<User> => {
        const response = await api.get('/users/me');
        return response.data;
    },

    updateRole: async (userId: string, role: Role): Promise<{ message: string; user: User }> => {
        const response = await api.patch(`/users/${userId}/role`, { role });
        return response.data;
    },

    deleteUser: async (userId: string): Promise<{ message: string }> => {
        const response = await api.delete(`/users/${userId}`);
        return response.data;
    },

    updateProfile: async (name?: string, password?: string): Promise<{ message: string; user: User }> => {
        const response = await api.patch('/users/me', { name, password });
        return response.data;
    },
};

// Content API
export const contentAPI = {
    getAll: async (): Promise<{ items: SiteContent[]; bySection: Record<string, Record<string, string>> }> => {
        const response = await api.get('/content');
        return response.data;
    },

    getBySection: async (section: string): Promise<Record<string, string>> => {
        const response = await api.get(`/content/section/${section}`);
        return response.data;
    },

    update: async (key: string, value: string, section: string): Promise<{ message: string; content: SiteContent }> => {
        const response = await api.put('/content', { key, value, section });
        return response.data;
    },

    batchUpdate: async (items: Array<{ key: string; value: string; section: string }>): Promise<{ message: string; updated: number; items: SiteContent[] }> => {
        const response = await api.put('/content/batch', { items });
        return response.data;
    },

    delete: async (key: string): Promise<{ message: string }> => {
        const response = await api.delete(`/content/${key}`);
        return response.data;
    },
};

// Contact API
export const contactAPI = {
    submit: async (name: string, email: string, subject: string, message: string): Promise<{ message: string; id: string }> => {
        const response = await api.post('/contact', { name, email, subject, message });
        return response.data;
    },

    getAll: async (): Promise<ContactMessage[]> => {
        const response = await api.get('/contact');
        return response.data;
    },

    getUnreadCount: async (): Promise<{ count: number }> => {
        const response = await api.get('/contact/unread/count');
        return response.data;
    },

    markAsRead: async (id: string): Promise<{ message: string; data: ContactMessage }> => {
        const response = await api.patch(`/contact/${id}/read`);
        return response.data;
    },

    delete: async (id: string): Promise<{ message: string }> => {
        const response = await api.delete(`/contact/${id}`);
        return response.data;
    },
};

export default api;
