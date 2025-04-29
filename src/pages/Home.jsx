// src/pages/Home.jsx
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/AuthContext';

const Home = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/signin');
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#e6f4ea',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    marginTop: '20px',
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ color: '#4CAF50' }}>Welcome to Home Page!</h2>
      <button onClick={handleLogout} style={buttonStyle}>Logout</button>
    </div>
  );
};

export default Home;
