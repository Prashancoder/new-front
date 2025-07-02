import React from 'react';
import './AboutSection.css';
import aboutImage from '../../images/about.jpg';
import { Link } from 'react-router-dom';

const AboutSection2 = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src={aboutImage} alt="About Abhay Kumar Sharma" />
        </div>
        <div className="about-content">
          <h3>Abhay Kumar Sharma</h3>
          <h2>Numerologist | Life Coach | Motivational Speaker | Spiritual Guide</h2>
          <p>
            Namaste 🙏, I am Abhay Kumar Sharma, a passionate Numerologist, Life Coach, Motivational Speaker, and spiritual seeker. My journey blends a rational career in business and IT with a deep spiritual path, helping people find alignment in their personal and professional lives.
          </p>
          <p>
            With 13+ years in the IT industry as a Global Business Analyst and 10+ years in International Sales & Marketing, I have led major projects and also founded my own business. This rich experience fuels my practical, analytical, and empathetic approach to coaching and numerology.
          </p>
          <p>
            I offer customized solutions in <strong>Lucky Name & Mobile Number Correction, Career & Business Strategy, Marriage & Relationship Guidance, Vastu Consultation, and Spiritual Healing</strong>. My goal is to bring clarity, positivity, and purpose into people’s lives through a perfect balance of logic and spirituality.
          </p>
          <p>
            As a Sadhu and spiritual mentor, I believe every soul carries unique vibrations — through numerology and guided practices, I help individuals tune into their higher self and life’s mission.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection2;
