import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "./Payment.css";

const Payment = () => {
  const [razorpayKey, setRazorpayKey] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const { cartItems, shippingInfo } = useSelector((state) => state.cart);
  const [orderInfo, setOrderInfo] = useState(null);

  useEffect(() => {
    // Get order info from session storage
    const storedOrderInfo = sessionStorage.getItem("orderInfo");
    if (!storedOrderInfo) {
      navigate("/order/confirm");
      return;
    }
    setOrderInfo(JSON.parse(storedOrderInfo));

    // Load Razorpay script
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    // Get Razorpay key
    const getRazorpayKey = async () => {
      try {
        const { data } = await axios.get("/api/v1/payment/key");
        setRazorpayKey(data.key);
      } catch (error) {
        toast.error(error.response?.data?.message || "Error loading payment gateway");
        navigate("/order/confirm");
      }
    };
    getRazorpayKey();

    return () => {
      document.body.removeChild(script);
    };
  }, [navigate]);

  const handlePayment = async () => {
    if (!orderInfo) {
      toast.error("Order information not found");
      navigate("/order/confirm");
      return;
    }

    try {
      // Create order on backend
      const { data } = await axios.post("/api/v1/payment/create-order", {
        amount: orderInfo.totalPrice,
        currency: "INR",
      });

      const options = {
        key: razorpayKey,
        amount: data.order.amount,
        currency: data.order.currency,
        name: "Guruji Store",
        description: "Product Purchase",
        order_id: data.order.id,
        handler: async function (response) {
          try {
            const { data } = await axios.post("/api/v1/payment/verify", {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              orderInfo: {
                ...orderInfo,
                user: user._id,
                orderItems: cartItems,
                shippingInfo,
              },
            });

            if (data.success) {
              // Clear cart and session storage
              sessionStorage.removeItem("orderInfo");
              toast.success("Payment successful!");
              navigate("/success");
            }
          } catch (error) {
            toast.error(error.response?.data?.message || "Payment verification failed");
          }
        },
        prefill: {
          name: user.name,
          email: user.email,
          contact: shippingInfo.phoneNo,
        },
        theme: {
          color: "#3399cc",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      toast.error(error.response?.data?.message || "Error creating payment order");
    }
  };

  return (
    <div className="payment-container">
      <div className="payment-details">
        <h2>Payment Details</h2>
        {orderInfo && (
          <div className="order-summary">
            <p>Total Amount: ₹{orderInfo.totalPrice}</p>
            <p>Subtotal: ₹{orderInfo.subtotal}</p>
            <p>Shipping: ₹{orderInfo.shippingCharges}</p>
            <p>Tax: ₹{orderInfo.tax}</p>
          </div>
        )}
        <button
          className="proceed-to-payment-btn"
          onClick={handlePayment}
          disabled={!orderInfo || !razorpayKey}
        >
          {!orderInfo || !razorpayKey ? "Loading..." : "Proceed to Payment"}
        </button>
      </div>
    </div>
  );
};

export default Payment; 