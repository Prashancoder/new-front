import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";

const ProductCard = ({ product }) => {
  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };

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
    <Link style={cardStyle} to={`/product/${product._id}`}>
      <img src={product.images[0]?.url} alt={product.name} style={imgStyle} />
      <p style={nameStyle}>{product.name}</p>

      <p style={descStyle}>
        {product.description.length > 50
          ? product.description.slice(0, 50) + "..."
          : product.description}
      </p>

      <div>
        <Rating {...options} />
        <br />
        <span className="productCardSpan">({product.numOfReviews} Reviews)</span>
      </div>

      <span style={priceStyle}>{`₹${product.price}`}</span>

      <div>
        <span style={buttonStyle}>View Details / Add to Cart</span>
      </div>
    </Link>
  );
};

export default ProductCard;
