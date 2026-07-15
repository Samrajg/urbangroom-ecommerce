import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    navigate('/user/login');
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Create Account</h2>
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <Input label="Full Name" placeholder="Enter your full name" required />
          </div>
          <div className="form-group">
            <Input label="Email" type="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <Input label="Phone Number" type="tel" placeholder="Enter your phone number" required />
          </div>
          <div className="form-group">
            <Input label="Password" type="password" placeholder="Create a password" required />
          </div>
          <div className="form-group">
            <Input label="Confirm Password" type="password" placeholder="Confirm your password" required />
          </div>
          <div className="form-actions">
            <Button type="submit" variant="primary">Create Account</Button>
            <p>Already have an account? <Link to="/user/login">Login here</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
