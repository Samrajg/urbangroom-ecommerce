import React from 'react';
import './Card.css';

const Card = ({ title, value, icon, children, className = '' }) => {
  return (
    <div className={`card ${className}`}>
      {title && <h3 className="card-title">{title}</h3>}
      {value && <div className="card-value">{value}</div>}
      {children}
    </div>
  );
};

export default Card;
