import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loggedUser, setLoggedUser] = useState(null);
  const navigate = useNavigate();

  function login(email, password) {
    if (user && user.email === email && user.password === password) {
      setLoggedUser({ name: user.name, email: user.email });
      return "Login success";
    }
    setLoggedUser(null);
    return null;
  }

  function logout() {
    setLoggedUser(null);
    navigate("/");
  }

  useEffect(() => {
    const u = JSON.parse(localStorage.getItem("user"));
    if (u) setUser(u);
  }, []);

  return (
    <AuthContext.Provider value={{ user, loggedUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
