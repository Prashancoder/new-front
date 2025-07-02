import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Payment = ({ orderInfo }) => {
  const [razorpayKey, setRazorpayKey] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const { cartItems, shippingInfo } = useSelector((state) => state.cart);

  useEffect(() => {
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
        toast.error(error.response.data.message);
      }
    };
    getRazorpayKey();

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePayment = async () => {
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
              toast.success("Payment successful!");
              navigate("/");
            }
          } catch (error) {
            toast.error(error.response.data.message);
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
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="payment-container">
      <button
        className="proceed-to-payment-btn"
        onClick={handlePayment}
      >
        Proceed to Payment
      </button>
    </div>
  );
};

export default Payment; 