import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext.js';

export function useAuth() {
    return useContext(AuthContext);
}