import React from 'react';

const ServiceCard = ({ service }) => {
  const cardStyle = {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "15px",
    margin: "10px",
    textAlign: "center",
    width: "250px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textDecoration: "none",
    color: "#000",
    backgroundColor: "#fff"
  };

  const imgStyle = {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "8px",
  };

  const nameStyle = {
    fontWeight: "bold",
    fontSize: "18px",
    margin: "10px 0 5px",
  };

  const descStyle = {
    fontSize: "14px",
    color: "#555",
    marginBottom: "10px",
  };

  const priceStyle = {
    fontSize: "16px",
    fontWeight: "600",
    color: "#2e7d32",
    marginTop: "10px",
  };

  const buttonStyle = {
    marginTop: "12px",
    display: "inline-block",
    padding: "8px 16px",
    backgroundColor: "#2196f3",
    color: "#fff",
    borderRadius: "4px",
    textDecoration: "none",
    fontSize: "14px",
  };

  return (
    <div style={cardStyle}>
      <img src={service.images[0]?.url} alt={service.name} style={imgStyle} />
      <p style={nameStyle}>{service.name}</p>

      <p style={descStyle}>
        {service.description?.length > 50
          ? service.description.slice(0, 50) + "..."
          : service.description}
      </p>

      <span style={priceStyle}>{`₹${service.price}`}</span>

      <div>
        <a 
          href="https://calendly.com/ps985094/30min" 
          target="_blank" 
          rel="noopener noreferrer"
          style={buttonStyle}
        >
          Book Service
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
  