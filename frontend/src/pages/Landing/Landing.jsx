import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import './Landing.css';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <div className="landing-content">
        <h1 className="logo">BeautyStore</h1>
        <p className="description">Your One Stop Cosmetics Store</p>

        <Button onClick={() => navigate('/user/login')} className="login-btn">
          Login to Continue
        </Button>
      </div>
    </div>
  );
};

export default Landing;
