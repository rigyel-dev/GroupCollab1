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
import Home from './pages/Home'

const App = () => {
  return (
    <div>
      <SignIn/>
      <SignUp/>
      <Contact/>
      <Home/>
      
    </div>

  )
}

export default App
