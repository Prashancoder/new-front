import React from 'react';
import './WhyChooseUs.css';

const statsData = [
  {
    id: 1,
    number: "100+",
    title: "Trusted by 100+ Clients"
  },
  {
    id: 2,
    number: "13+",
    title: "Years of Experience"
  },
  {
    id: 3,
    number: "55+",
    title: "Types of Horoscopes"
  },
  {
    id: 4,
    number: "24x7",
    title: "Spiritual Support & Consultations"
  }
  

];

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <h2>Why Choose Us</h2>
      <div className="stats-container">
        {statsData.map((stat) => (
          <div key={stat.id} className="stat-card">
            <h3 className="stat-number">{stat.number}</h3>
            <p className="stat-title">{stat.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs; 