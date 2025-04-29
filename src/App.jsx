// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './hooks/pages/signup/SignIn';
import SignUp from './hooks/pages/SignUp';
import Home from './hooks/pages/Home';
import ProtectedRoute from './components/ProtectedRoute';



import Home from './components/home/Home'
import './index.css';
import Footer from './components/footer/Footer';
import About from './components/About'


import ContactForm from './pages/Contact';


const App = () => {
  return (

    <Router>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        
        {/* Protected Home Route */}
        <Route 
          path="/home" 
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } 
        />
        
        {/* Redirect unknown routes */}
        <Route path="*" element={<SignIn />} />
      </Routes>
    </Router>
  );
};

export default App;

