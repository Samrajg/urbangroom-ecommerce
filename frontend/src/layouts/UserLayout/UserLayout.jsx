import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';

const UserLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="main-content">
        <div className="container">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default UserLayout;
