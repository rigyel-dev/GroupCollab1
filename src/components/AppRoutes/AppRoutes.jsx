import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignIn from '../../pages/signin';
import SignUp from '../../pages/SignUp';
import ProtectedRoute from '../ProtectedRoute';
import Home from '../home/Home';
import About from '../About';
import Contact from '../../pages/Contact';
// Import the ProtectedRoute component

const AppRoutes = () => {
  return (
    <Routes>
      {/* The root route now shows SignIn */}
      <Route path="/" element={<SignIn />} />

      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      
      {/* Protected routes */}
      <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
      <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
      <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
    </Routes>
   
  );
};

export default AppRoutes;
