import React from 'react';
import './PolicyBanner.css';

const PolicyBanner = ({ title }) => {
  return (
    <div className="policy-banner">
      <div className="policy-banner-content">
        <h1>{title}</h1>
        <div className="policy-banner-overlay"></div>
      </div>
    </div>
  );
};

export default PolicyBanner; 