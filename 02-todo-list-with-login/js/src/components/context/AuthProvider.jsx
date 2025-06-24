import React, { useState, useEffect } from 'react';
import { AuthContext } from './AuthContext';
import { loginUser, registerUser } from '../utils/api';

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('token'));

    useEffect(() => {
        if (token) {
            setUser({ isAuthenticated: true });
        }
    }, [token]);

    const login = async (credentials) => {
        try {
            const data = await loginUser(credentials);
            if (data && data.access_token) {
                setToken(data.access_token);
                localStorage.setItem('token', data.access_token);

                const userInfo = {
                    username: credentials.username,
                    isAuthenticated: true
                };
                setUser(userInfo);
                return { success: true, data };
            }
            return { success: false, error: "Invalid credentials" };
        } catch (error) {
            return { success: false, error: error.message || "Login failed" };
        }
    };

    const register = async (info) => {
        try {
            const data = await registerUser(info);
            return { success: true, data };
        } catch (error) {
            return { success: false, error: error.message || "Registration failed" };
        }
    };

    const logout = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem('token');
    };

    return (
        <AuthContext.Provider value={{ user, token, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
}