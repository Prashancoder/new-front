import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import MetaData from "../MetaData";
import WhyChooseUs from "../../WhyChooseUs/WhyChooseUs";
import Testimonials from "../../Testimonials/Testimonials";
import { createContact, clearErrors } from "../../../actions/contactAction";
import "./Contact.css";
import VisionMission from "../../VisionMission/VisionMission";

const Contact = () => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { loading, error, success } = useSelector((state) => state.contacts);

  const [contactData, setContactData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const { name, phone, email, subject, message } = contactData;

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (success) {
      alert.success("Message sent successfully!");
      setContactData({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  }, [dispatch, alert, error, success]);

  const contactSubmit = (e) => {
    e.preventDefault();
    dispatch(createContact(contactData));
  };

  const handleChange = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <MetaData title="Contact Us - Astro World" />
      
      <div className="contact-banner">
        {/* <h1>Contact Us</h1>
        <p>Get in touch with our expert astrologers</p> */}
      </div>

      <section className="contact-intro">
        <h2>Get in Touch With Us!</h2>
        <div className="contact-description">
          <p>
            We're here to help you on your journey of self-discovery and growth. Whether you have questions about astrology or need personalized guidance, feel free to reach out. Our team is ready to provide you with the insights you need to navigate life's path with confidence. Let's connect and start your journey today!
          </p>
        </div>
      </section>

      <section className="contact-main">
        <div className="contact-container">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="info-item">
              <i className="fas fa-phone"></i>
              <div>
                <h4>WhatsApp Number</h4>
                <p>+(91) 9376915559</p>
              </div>
            </div>
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <div>
              <h4>Email</h4>
              <p id="contact-email">info@absolutenumberoastroservice.com</p>
              </div>
            </div>
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h4>Address</h4>
                <p>SC0 37 Second Floor,&nbsp;Metro City Plaza Market,&nbsp;Lohgarh Road,&nbsp;SAS Nagar,&nbsp;Zirakpur,&nbsp;Punjab-140603</p>
              </div> 
            </div>
          </div>

          <div className="contact-form">
            <h3>Send us a Message</h3>
            <form onSubmit={contactSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  value={phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  value={subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  value={message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <VisionMission />
      <Testimonials />
    </>
  );
};

export default Contact;
