import React from 'react';
import Card from '../../../components/Card/Card';

const AdminDashboard = () => {
  return (
    <div>
      <h1 style={{ marginBottom: '20px' }}>Welcome Admin</h1>
      
      <div className="dashboard-grid">
        <Card title="Total Products" value="120" />
        <Card title="Total Orders" value="45" />
        <Card title="Revenue" value="$4,500" />
        <Card title="Customers" value="89" />
      </div>
    </div>
  );
};

export default AdminDashboard;
