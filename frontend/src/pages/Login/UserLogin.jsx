import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

const UserLogin = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/user/dashboard');
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">User Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <Input label="Email" type="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <Input label="Password" type="password" placeholder="Enter your password" required />
          </div>
          <div className="form-actions">
            <Button type="submit" variant="primary">Login</Button>
            <Link to="/forgot-password">Forgot Password?</Link>
            <p>Don't have an account? <Link to="/register">Register here</Link></p>
            <div style={{ marginTop: '16px', fontSize: '12px' }}>
              <Link to="/admin/login" style={{ color: 'var(--text-light)' }}>Admin Login</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;
