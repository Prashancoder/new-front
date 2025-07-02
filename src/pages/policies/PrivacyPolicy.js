import React from 'react';
import PolicyBanner from '../../components/common/PolicyBanner';
import './PolicyPage.css';

const PrivacyPolicy = () => {
  return (
    <div>
      <PolicyBanner title="Privacy Policy" />
      <div className="policy-container">
        <div className="policy-content">
          <div className="policy-section">
            <h2>Effective Date: March 15, 2024</h2>
            <p>At Absolute Numbero , we value your privacy and ensure your data is protected in accordance with applicable laws.</p>
          </div>

          <div className="policy-section">
            <h2>1. Information Collected</h2>
            <p>We collect:</p>
            <ul>
              <li>Personal Info: Name, Email, Phone number</li>
              <li>Payment Info: Handled securely via Razorpay or bank</li>
              <li>Usage Data: Cookies, session data, etc.</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>2. Use of Information</h2>
            <p>We use your data to:</p>
            <ul>
              <li>Provide and improve services</li>
              <li>Send updates and offers (with your consent)</li>
              <li>Ensure secure transactions</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>3. Data Sharing</h2>
            <p>Your information is never sold or shared except:</p>
            <ul>
              <li>To comply with legal requirements</li>
              <li>With payment gateways to process transactions securely</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>4. Cookies</h2>
            <p>We use cookies to improve your experience. You can manage cookies through your browser settings.</p>
          </div>

          <div className="policy-section">
            <h2>5. Data Security</h2>
            <p>We use encryption and secure servers to protect your data, but no system is completely foolproof. Use our services at your own risk.</p>
          </div>

          <div className="policy-section">
            <h2>6. Your Rights</h2>
            <p>You may:</p>
            <ul>
              <li>Access or modify your data</li>
              <li>Request deletion of your data</li>
              <li>Opt out of promotional messages</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>7. Policy Updates</h2>
            <p>We may update this Privacy Policy from time to time. Changes will be posted here.</p>
          </div>

          <div className="policy-section">
            <h2>8. Contact</h2>
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

export default PrivacyPolicy; 