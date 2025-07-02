import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";

const ServiceCard = ({ service }) => {
  return (
    <div className="serviceCard">
      <img src={service.images[0].url} alt={service.name} />
      <div className="serviceCard__info">
        <p className="serviceCard__name">{service.name}</p>
        <p className="serviceCard__price">{`₹${service.price}`}</p>
        <Link to={`/service/${service._id}`} className="serviceCard__btn">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard; 