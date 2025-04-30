// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';import { AuthProvider } from './hooks/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);

    
    


