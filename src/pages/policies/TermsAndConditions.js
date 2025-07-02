import React from 'react';
import PolicyBanner from '../../components/common/PolicyBanner';
import './PolicyPage.css';

const TermsAndConditions = () => {
  return (
    <div>
      <PolicyBanner title="Terms & Conditions" />
      <div className="policy-container">
        <div className="policy-content">
          <div className="policy-section">
            <h2>Effective Date: May 09, 2025</h2>
            <p>Welcome to Absolute Numbero ! By using our website and services, you agree to be bound by the following terms and conditions. Please read them carefully before proceeding.</p>
          </div>

          <div className="policy-section">
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing this website or using our services, you acknowledge that you have read, understood, and agree to these Terms & Conditions. If you do not agree, please do not use our website.</p>
          </div>

          <div className="policy-section">
            <h2>2. Services Offered</h2>
            <p>Absolute Numbero  provides the following services:</p>
            <ul>
              <li>Online Astrology Consultation</li>
              <li>Personalized Numerology Guidance</li>
              <li>Horoscope Analysis</li>
              <li>Life Path Reading</li>
              <li>Relationship Compatibility Analysis</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>3. Payment Terms</h2>
            <p>All payments must be made through our secure payment partners:</p>
            <ul>
              <li>Razorpay</li>
              <li>Bank Transfer</li>
            </ul>
            <p>By making a payment, you authorize us to process your transaction securely.</p>
          </div>

          <div className="policy-section">
            <h2>4. Cancellation & Refund</h2>
            <p>Cancellations must be requested at least 24 hours before your scheduled service.</p>
            <p>Refunds will be issued only under the following conditions:</p>
            <ul>
              <li>Service not delivered due to technical error</li>
              <li>Valid issues reviewed and approved by our support team</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>5. User Responsibilities</h2>
            <p>By using our services, you agree to:</p>
            <ul>
              <li>Provide true and accurate information</li>
              <li>Not misuse the platform or violate any applicable law</li>
              <li>Avoid uploading harmful or malicious content</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>6. Intellectual Property</h2>
            <p>All content on this site—text, images, logos, and videos—is the exclusive property of Absolute Numbero . Unauthorized use is strictly prohibited.</p>
          </div>

          <div className="policy-section">
            <h2>7. Limitation of Liability</h2>
            <p>We are not liable for:</p>
            <ul>
              <li>Any indirect or consequential loss</li>
              <li>Decisions made based on the information provided through our services</li>
            </ul>
            <p>Our services are for informational/guidance purposes and should not be considered a replacement for medical, legal, or financial advice.</p>
          </div>

          <div className="policy-section">
            <h2>8. Social Media</h2>
            <p>Connect with us:</p>
            <ul>
              <li>Instagram: @absolutnumbroastro</li>
              <li>Facebook: Absolute Numbero  Astro Services</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>9. Changes to Terms</h2>
            <p>We reserve the right to change these terms at any time. Updates will be reflected on this page.</p>
          </div>

          <div className="policy-section">
            <h2>10. Contact Us</h2>
            <div className="contact-info">
              <p><span>📞</span>+91 9376915559</p>
              <p><span>✉️</span>info@absolutnumbroastroservices.com</p>
              <p><span>📍</span>Chandigarh Ambala Road, Main Highway, Metro City Plaza Market, Zirakpur</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions; 