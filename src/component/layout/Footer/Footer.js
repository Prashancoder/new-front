import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <style>
        {`
          .footer {
            background-color: #0D0B29;
            color: #fff;
            padding: 40px 20px;
            font-family: Arial, sans-serif;
            overflow-x: hidden;
          }

          .footer-section {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            margin-bottom: 30px;
          }

          .footer-column {
            flex: 1;
            min-width: 200px;
            margin: 10px 20px;
          }

          .footer-title {
            font-size: 20px;
            font-weight: bold;
            margin-bottom: 15px;
          }

          .footer-text {
            color: #ccc;
            font-size: 14px;
            line-height: 1.6;
          }

          .footer-link {
            color: #ccc;
            text-decoration: none;
            display: block;
            margin-bottom: 8px;
            font-size: 14px;
          }

          .footer-icon {
            background-color: #1a1734;
            border-radius: 50%;
            padding: 10px;
            margin-right: 10px;
            display: inline-block;
            color: #fff;
          }

          .footer-bottom {
            border-top: 1px solid #333;
            padding-top: 20px;
            text-align: center;
            font-size: 13px;
            color: #aaa;
          }

          .contact-icon {
            color: #FFD700;
            margin-right: 10px;
          }

          @media (max-width: 768px) {
            .footer-section {
              flex-direction: column;
              align-items: flex-start;
            }

            .footer-column {
              margin: 10px 0;
            }
          }
        `}
      </style>

      <footer className="footer">
        <div className="footer-section">
          {/* Brand Info */}
          <div className="footer-column">
            <div className="footer-title">Absolute Numbero</div>
            <p className="footer-text">
              Providing expert astrology and numerology services to guide you through life's journey.
            </p>
            <div>
              <br />
              <a
                href="https://www.facebook.com/profile.php?id=61576338429989"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-icon"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/absolutenumberoastroservice/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-icon"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.youtube.com/@absolutenumberoastroservice"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-icon"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <div className="footer-title">Quick Links</div>
            <Link to="/" className="footer-link">Home</Link>
            <Link to="/about" className="footer-link">About Us</Link>
            <Link to="/services" className="footer-link">Services</Link>
            <Link to="/contact" className="footer-link">Contact Us</Link>
          </div>

          {/* Legal */}
          <div className="footer-column">
            <div className="footer-title">Legal</div>
            <Link to="/terms" className="footer-link">Terms & Conditions</Link>
            <Link to="/privacy" className="footer-link">Privacy Policy</Link>
            <Link to="/refund-policy" className="footer-link">Refund Policy</Link>
          </div>

          {/* Contact */}
          <div className="footer-column">
            <div className="footer-title">Contact Us</div>
            <p className="footer-text">
              <span className="contact-icon">📞</span>+91 9376915559
            </p>
            <p className="footer-text">
              <span className="contact-icon">✉️</span>info@absolutnumbroastroservices.com
            </p>
            <p className="footer-text">
              <span className="contact-icon">📍</span>SC0 37 Second Floor, Metro City Plaza Market, Lohgarh Road, SAS Nagar, Zirakpur, Punjab-140603
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="footer-bottom">
          © {new Date().getFullYear()} Absolute Numbero. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
