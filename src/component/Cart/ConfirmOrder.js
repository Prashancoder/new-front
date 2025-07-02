import React, { Fragment, useEffect } from "react";
import "./ConfirmOrder.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import MetaData from "../layout/MetaData";
import CheckoutSteps from "./CheckoutSteps";
import { Typography } from "@material-ui/core";
import { useAlert } from "react-alert";
import axios from "axios";
import { createOrder, clearErrors } from "../../actions/orderAction";

const ConfirmOrder = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();
  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    if (!shippingInfo || !cartItems || cartItems.length === 0) {
      navigate('/cart');
      return;
    }
  }, [isAuthenticated, shippingInfo, cartItems, navigate]);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );
// yha par ham shipping charges dal sakta hai 0: 0(yha par shipping charges 0 hai)
  const shippingCharges = subtotal > 1000 ? 0 : 0;

  const tax = subtotal * 0.18;

  const totalPrice = subtotal + tax + shippingCharges;

  const address = `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.state}, ${shippingInfo.pinCode}, ${shippingInfo.country}`;

  const proceedToPayment = () => {
    const data = {
      subtotal,
      shippingCharges,
      tax,
      totalPrice,
    };

    sessionStorage.setItem("orderInfo", JSON.stringify(data));

    navigate("/process/payment");
  };

  return (
    <Fragment>
      <MetaData title="Confirm Order" />
      <CheckoutSteps activeStep={1} />
      <div className="confirmOrderPage">
        <div>
          <div className="confirmshippingArea">
            <Typography>Shipping Info</Typography>
            <div className="confirmshippingAreaBox">
              <div>
                <p>Name:</p>
                <span>{shippingInfo?.name}</span>
              </div>
              <div>
                <p>Phone:</p>
                <span>{shippingInfo?.phoneNo}</span>
              </div>
              <div>
                <p>Address:</p>
                <span>{address}</span>
              </div>
            </div>
          </div>
          <div className="confirmCartItems">
            <Typography>Your Cart Items:</Typography>
            <div className="confirmCartItemsContainer">
              {cartItems &&
                cartItems.map((item) => (
                  <div key={item.product}>
                    <img src={item.image} alt="Product" />
                    <div>
                      <p>{item.name}</p>
                      <span>
                        {item.quantity} X ₹{item.price} ={" "}
                        <b>₹{item.price * item.quantity}</b>
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/*  */}
        <div>
          <div className="orderSummary">
            <Typography>Order Summery</Typography>
            <div>
              <div>
                <p>Subtotal:</p>
                <span>₹{subtotal}</span>
              </div>
              <div>
                <p>Shipping Charges:</p>
                <span>₹{shippingCharges}</span>
              </div>
              <div>
                <p>GST:</p>
                <span>₹{tax}</span>
              </div>
            </div>

            <div className="orderSummaryTotal">
              <p>
                <b>Total:</b>
              </p>
              <span>₹{totalPrice}</span>
            </div>

            <button onClick={proceedToPayment}>Proceed To Payment</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ConfirmOrder;
