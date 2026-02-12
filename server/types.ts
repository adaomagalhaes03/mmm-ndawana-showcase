// Role types
export type Role = 'ADMIN' | 'EDITOR';

// User type
export interface User {
    id: string;
    name: string;
    email: string;
    role: Role;
    createdAt?: Date;
    updatedAt?: Date;
}

// Auth types
export interface LoginCredentials {
    email: string;
    password: string;
}

export interface RegisterData {
    name: string;
    email: string;
    password: string;
    role?: Role;
}

// Site Content types
export interface SiteContent {
    id: string;
    key: string;
    value: string;
    section: string;
    createdAt?: Date;
    updatedAt?: Date;
}

// Contact Message types
export interface ContactMessage {
    id: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    isRead: boolean;
    createdAt?: Date;
}
