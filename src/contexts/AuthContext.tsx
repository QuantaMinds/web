import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { authApi, AuthResponse } from '@/services/apiService';
import { toast } from 'sonner';

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: RegisterData) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
  chatCount: number;
  incrementChatCount: () => void;
  resetChatCount: () => void;
  isAuthenticated: boolean;
}

interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [chatCount, setChatCount] = useState(0);

  useEffect(() => {
    // Check for existing token on app load
    const token = localStorage.getItem('authToken');
    if (token) {
      verifyToken(token);
    } else {
      setIsLoading(false);
    }

    // Load chat count from localStorage
    const savedChatCount = localStorage.getItem('chatCount');
    if (savedChatCount) {
      setChatCount(parseInt(savedChatCount, 10));
    }
  }, []);

  const verifyToken = async (token: string) => {
    try {
      const response = await authApi.verifyToken();
      setUser(response.user);
    } catch (error) {
      console.error('Token verification failed:', error);
      localStorage.removeItem('authToken');
      toast.error('Session expired. Please login again.');
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const response = await authApi.login({ email, password });
      
      localStorage.setItem('authToken', response.token);
      setUser(response.user);
      toast.success('Login successful!');
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Login failed';
      toast.error(errorMessage);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (userData: RegisterData) => {
    setIsLoading(true);
    try {
      const response = await authApi.register(userData);
      
      localStorage.setItem('authToken', response.token);
      setUser(response.user);
      toast.success('Registration successful!');
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Registration failed';
      toast.error(errorMessage);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('chatCount');
    setUser(null);
    setChatCount(0);
  };

  const incrementChatCount = () => {
    const newCount = chatCount + 1;
    setChatCount(newCount);
    localStorage.setItem('chatCount', newCount.toString());
  };

  const resetChatCount = () => {
    setChatCount(0);
    localStorage.removeItem('chatCount');
  };

  const value = {
    user,
    login,
    register,
    logout,
    isLoading,
    chatCount,
    incrementChatCount,
    resetChatCount,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};