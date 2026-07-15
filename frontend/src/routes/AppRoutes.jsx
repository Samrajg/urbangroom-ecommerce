import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Layouts
import AdminLayout from '../layouts/AdminLayout/AdminLayout';
import UserLayout from '../layouts/UserLayout/UserLayout';

// Pages
import Landing from '../pages/Landing/Landing';
import UserLogin from '../pages/Login/UserLogin';
import AdminLogin from '../pages/Login/AdminLogin';
import Register from '../pages/Register/Register';
import ForgotPassword from '../pages/ForgotPassword/ForgotPassword';
import OTP from '../pages/OTP/OTP';
import ResetPassword from '../pages/ResetPassword/ResetPassword';
import AdminDashboard from '../pages/Admin/Dashboard/Dashboard';
import UserDashboard from '../pages/User/Dashboard/Dashboard';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Landing />} />
      <Route path="/user/login" element={<UserLogin />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/otp" element={<OTP />} />
      <Route path="/reset-password" element={<ResetPassword />} />

      {/* Admin Routes */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<AdminDashboard />} />
      </Route>

      {/* User Routes */}
      <Route path="/user" element={<UserLayout />}>
        <Route path="dashboard" element={<UserDashboard />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
