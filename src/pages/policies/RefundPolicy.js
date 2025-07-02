import React from 'react';
import PolicyBanner from '../../components/common/PolicyBanner';
import './PolicyPage.css';

const RefundPolicy = () => {
  return (
    <div>
      <PolicyBanner title="Refund Policy" />
      <div className="policy-container">
        <div className="policy-content">
          <div className="policy-section">
            <h2>Effective Date: March 15, 2024</h2>
            <p>Customer satisfaction is important to us. If you're unhappy with our service, please read our refund policy below:</p>
          </div>

          <div className="policy-section">
            <h2>1. Refund Eligibility</h2>
            <p>You are eligible for a refund if:</p>
            <ul>
              <li>The service was not delivered due to a technical issue</li>
              <li>You raise a valid complaint within 3 days of payment</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>2. Process</h2>
            <ul>
              <li>Refunds must be requested by email with your transaction details</li>
              <li>Upon approval, the refund will be processed within 7 working days</li>
              <li>The amount will be credited to your original payment method</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>3. Non-Refundable Cases</h2>
            <ul>
              <li>If the service has already been delivered as described</li>
              <li>If the refund request is made after the 3-day window</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>4. Contact for Refunds</h2>
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

export default RefundPolicy; 