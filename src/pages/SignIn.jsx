import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAuth } from '../hooks/AuthContext';

const SignIn = () => {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Redirect to home if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/home'); // Or any other page you want to redirect to
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = login(username, password);
    if (result.success) {
      const from = location.state?.from?.pathname || '/home';
      navigate(from, { replace: true });
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="card p-4 shadow" style={{ width: '350px' }}>
        <h2 className="text-center text-success mb-4">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success w-100">
            Login
          </button>
          {error && <p className="text-danger text-center mt-3">{error}</p>}
          <div className="text-center mt-3">
            <Link to="/signup" className="text-success">
              Don't have an account? Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
