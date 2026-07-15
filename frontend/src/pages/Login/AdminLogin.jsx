import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

const AdminLogin = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/admin/dashboard');
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Admin Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <Input label="Admin Email" type="email" placeholder="Enter admin email" required />
          </div>
          <div className="form-group">
            <Input label="Password" type="password" placeholder="Enter admin password" required />
          </div>
          <div className="form-actions">
            <Button type="submit" variant="primary">Login</Button>
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
