import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { authApi, AuthResponse } from "@/services/apiService";
import { toast } from "sonner";
import { set } from "date-fns";

interface User {
  userId: string;
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
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
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
    const userId = localStorage.getItem("userId");
    if (userId == null || userId == undefined || userId == "") {
      console.error("Token verification failed");
      localStorage.removeItem("userId");
      toast.error("Session expired. Please login again.");
      setIsLoading(false);
    } else {
      setUser({ userId });
      console.log("User ID found in localStorage:", userId);
      setIsLoading(false);
    }

    // Load chat count from localStorage
    const savedChatCount = localStorage.getItem("chatCount");
    if (savedChatCount) {
      setChatCount(parseInt(savedChatCount, 10));
    }
  }, []);

  const login = async (
    email: string,
    password: string,
    withCredentials: boolean = true
  ) => {
    setIsLoading(true);
    try {
      const response = await authApi.login(
        { email, password },
        withCredentials
      );

      setUser(response.data);
      localStorage.setItem("userId", response.data.userId);
      toast.success("Login successful!");
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Login failed";
      toast.error(errorMessage);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (
    userData: RegisterData,
    withCredentials: boolean = false
  ) => {
    setIsLoading(true);
    try {
      const response = await authApi.register(userData, withCredentials);
      if (response !== null || response === undefined) {
        toast.success("Registration successful!");
      } else {
        toast.error("Registration failed. Please try again.");
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Registration failed";
      toast.error(errorMessage);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.clear();
    toast.success("Logout successful!");
    setChatCount(0);
  };

  const incrementChatCount = () => {
    const newCount = chatCount + 1;
    setChatCount(newCount);
    localStorage.setItem("chatCount", newCount.toString());
  };

  const resetChatCount = () => {
    setChatCount(0);
    localStorage.removeItem("chatCount");
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
