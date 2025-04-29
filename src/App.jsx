// // src/App.jsx
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';
// import Home from './pages/Home';
// import ProtectedRoute from './components/ProtectedRoute';



// const App = () => {
//   return (

//     <Router>
//       <Routes>
//         <Route path="/signin" element={<SignIn />} />
//         <Route path="/signup" element={<SignUp />} />
        
//         {/* Protected Home Route */}
//         <Route 
//           path="/home" 
//           element={
//             <ProtectedRoute>
//               <Home />
//             </ProtectedRoute>
//           } 
//         />
        
//         {/* Redirect unknown routes */}
//         <Route path="*" element={<SignIn />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;



import React from 'react'

import SignIn from './pages/signin'
import SignUp from './pages/SignUp'
import Contact from './pages/Contact'
import './index.css';
import About from './components/About'
import Home from './pages/home/Home'
import NavBar from './components/navbar/NavBar'
import Footer from './components/footer/Footer';
import AppRoutes from './components/AppRoutes/AppRoutes';

const App = () => {
  return (
    <div>
     
      <AppRoutes/>
      
      
    </div>

  )
}

export default App
