import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

const OTP = () => {
  const navigate = useNavigate();

  const handleVerify = (e) => {
    e.preventDefault();
    navigate('/reset-password');
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Enter OTP</h2>
        <form onSubmit={handleVerify}>
          <div className="form-group">
            <Input label="6 Digit OTP" type="text" maxLength="6" placeholder="Enter 6 digit OTP" required />
          </div>
          <div className="form-actions">
            <Button type="submit" variant="primary">Verify OTP</Button>
            <Link to="/user/login">Back to Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OTP;
