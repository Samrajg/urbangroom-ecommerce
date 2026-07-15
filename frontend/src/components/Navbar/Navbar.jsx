import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/user/dashboard">BeautyStore</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/user/dashboard">Home</Link></li>
        <li><Link to="/user/dashboard">Products</Link></li>
        <li><Link to="/user/dashboard">Cart</Link></li>
        <li><Link to="/user/dashboard">Wishlist</Link></li>
        <li><Link to="/user/dashboard">Orders</Link></li>
        <li><Link to="/user/dashboard">Profile</Link></li>
        <li><Link to="/" className="logout-btn">Logout</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
