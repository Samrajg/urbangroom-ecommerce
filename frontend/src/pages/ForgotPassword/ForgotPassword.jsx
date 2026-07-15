import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleSendOTP = (e) => {
    e.preventDefault();
    navigate('/otp');
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Forgot Password</h2>
        <form onSubmit={handleSendOTP}>
          <div className="form-group">
            <Input label="Email" type="email" placeholder="Enter your registered email" required />
          </div>
          <div className="form-actions">
            <Button type="submit" variant="primary">Send OTP</Button>
            <Link to="/user/login">Back to Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
