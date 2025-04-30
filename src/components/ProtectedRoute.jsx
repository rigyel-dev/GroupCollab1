import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    // If the user is not authenticated, redirect to the signin page and pass the current location
    return <Navigate to="/signin" replace state={{ from: location }} />;
  }

  // If authenticated, render the children (protected content)
  return children;
};

export default ProtectedRoute;
