import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

const ResetPassword = () => {
  const navigate = useNavigate();

  const handleReset = (e) => {
    e.preventDefault();
    navigate('/user/login');
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Reset Password</h2>
        <form onSubmit={handleReset}>
          <div className="form-group">
            <Input label="New Password" type="password" placeholder="Enter new password" required />
          </div>
          <div className="form-group">
            <Input label="Confirm Password" type="password" placeholder="Confirm new password" required />
          </div>
          <div className="form-actions">
            <Button type="submit" variant="primary">Reset Password</Button>
            <Link to="/user/login">Back to Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
