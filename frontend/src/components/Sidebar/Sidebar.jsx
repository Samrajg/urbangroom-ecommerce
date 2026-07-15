import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <h2>Admin Panel</h2>
      </div>
      <ul className="sidebar-nav">
        <li><Link to="/admin/dashboard" className={isActive('/admin/dashboard')}>Dashboard</Link></li>
        <li><Link to="/admin/dashboard">Products</Link></li>
        <li><Link to="/admin/dashboard">Categories</Link></li>
        <li><Link to="/admin/dashboard">Orders</Link></li>
        <li><Link to="/admin/dashboard">Customers</Link></li>
      </ul>
      <div className="sidebar-footer">
        <Link to="/" className="logout-btn">Logout</Link>
      </div>
    </aside>
  );
};

export default Sidebar;
