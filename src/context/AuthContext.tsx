import axios from "axios";
import React, { createContext, useState, ReactNode, useContext, useEffect } from "react";
import { register as registerService } from "../services/Register";

// Definisikan tipe untuk state auth
interface AuthState {
  email: string;
  isAuthenticated: boolean;
}

// Definisikan tipe untuk context
interface AuthContextType {
  authState: AuthState;
  login: (email: string, password: string) => Promise<string | void>;
  register: (name: string, email: string, password: string) => Promise<string | undefined>;
  logout: () => void;
}

// Buat context dengan nilai default
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Buat provider untuk context
const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>(() => {
    const savedAuthState = localStorage.getItem("authState");
    return savedAuthState
      ? JSON.parse(savedAuthState)
      : { email: "", isAuthenticated: false };
  });

  useEffect(() => {
    localStorage.setItem('authState', JSON.stringify(authState));
  }, [authState]);

  const register = async (name: string, email: string, password: string): Promise<string | undefined> => {
    const errorMessage = await registerService(name, email, password);
    if (!errorMessage) {
      setAuthState({ email, isAuthenticated: true });
    }
    return errorMessage;
  };

  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post(
        "https://be-bcr-ch6-production.up.railway.app/api/v1/auth/login",
        {
          email,
          password,
        }
      );

      if (response.status !== 200) {
        throw new Error(response.data.message || "Login failed");
      }

      // Simpan data autentikasi atau token sesuai kebutuhan
      localStorage.setItem("token", response.data.token);

      setAuthState({ email, isAuthenticated: true });
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return error.response.data.message || "Login failed";
      }
      return "Login failed";
    }
  };

  const logout = () => {
    // Hapus token dari localStorage
    localStorage.removeItem("token");
    setAuthState({ email: "", isAuthenticated: false });
  };

  return (
    <AuthContext.Provider value={{ authState, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Buat custom hook untuk menggunakan AuthContext
const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuth };
