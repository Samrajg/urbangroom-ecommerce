import React from 'react';
import Card from '../../../components/Card/Card';
import Button from '../../../components/Button/Button';

const UserDashboard = () => {
  const dummyProducts = [
    { id: 1, name: 'Lipstick Matte', price: '$15.00' },
    { id: 2, name: 'Foundation SPF 30', price: '$25.00' },
    { id: 3, name: 'Mascara Volume', price: '$12.00' },
    { id: 4, name: 'Eyeshadow Palette', price: '$35.00' },
  ];

  return (
    <div style={{ marginTop: '20px' }}>
      <h1 style={{ marginBottom: '20px' }}>Welcome User</h1>
      
      <h2 style={{ marginBottom: '16px', color: 'var(--text-light)' }}>Featured Products</h2>
      <div className="dashboard-grid">
        {dummyProducts.map(product => (
          <Card key={product.id} title={product.name} value={product.price}>
            <div style={{ marginTop: '16px' }}>
              <Button variant="primary">Add to Cart</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default UserDashboard;
