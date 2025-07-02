import React from 'react';
import './AboutSection.css';
import aboutImage from '../../images/aboutcopy.JPG';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img
            src={aboutImage}
            alt="About Abhay Kumar Sharma"
style={{ maxHeight: '480px', width: '100%'}}
          />
        </div>
        <div className="about-content">
          <h3>Abhay Kumar Sharma</h3>
          <h2>Blending Spiritual Insight with Practical Life Coaching</h2>
          <p>
            I’m Abhay Kumar Sharma — Numerologist, Life Coach, Motivational
            Speaker, and Spiritual Guide. With 13+ years in IT and 10 years in
            global business, I help people align with their true path using
            numerology, name correction, Vastu, and spiritual healing.
          </p>
          <p>
            My mission is to empower lives through a balance of wisdom,
            strategy, and inner awakening.
          </p>
          <Link to="/about">
            <button className="about-button">Read More</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
