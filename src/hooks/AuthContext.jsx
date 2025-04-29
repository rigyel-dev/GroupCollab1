// src/context/AuthContext.jsx
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (username, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const userExists = users.find(
      (user) => user.username === username && user.password === password
    );

    if (userExists) {
      setIsAuthenticated(true);
      return { success: true };
    } else {
      return { success: false, message: 'Invalid username or password' };
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  const signup = (username, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const alreadyExists = users.find((user) => user.username === username);

    if (alreadyExists) {
      return { success: false, message: 'Username already taken' };
    }

    const newUser = { username, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    return { success: true };
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
