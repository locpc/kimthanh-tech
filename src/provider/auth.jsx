import { useState, useContext, createContext } from "react";
import { api } from "./api";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { API_URL } from "../config";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const { setItem, removeItem } = useLocalStorage();
  const [token, setToken] = useState(null);
  const [user, setUser] = useState();

  const handleLogin = async ({ email, password }) => {
    try {
      const res = await api.post(`${API_URL}/auth/login`, {
        email,
        password,
      });
      if (res && res?.data?.access_token) {
        const token = res?.data?.access_token;
        setItem("token", token);
        setUser({ user: res?.data?.user?.name, role: res?.data?.user?.role });
        setItem("user", res?.data?.user?.name);
        setItem("role", res?.data?.user?.role);
        setToken(token);
        return token;
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleSignUp = async ({ fullName, phone, address, password }) => {
    try {
      const res = await api.post("/auth/sign-up", {
        fullName,
        address,
        phoneNumber: phone,
        password,
        ownerId: "65ab44cacf906f1e618f4a6e",
      });
      if (res && res?.data) {
        const token = res?.data?.accessToken;
        const refresh = res?.data?.refreshToken;
        setItem("token", token);
        setItem("refresh", refresh);
        setToken(token);
        return token;
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleLogout = () => {
    removeItem("token");
    setToken(null);
  };

  const value = {
    token,
    user,
    setUser,
    onSignUp: handleSignUp,
    onLogin: handleLogin,
    onLogout: handleLogout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
