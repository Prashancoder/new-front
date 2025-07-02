import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import AboutSection2 from "../../AboutSection/AboutSectionabout";
import VisionMission from "../../VisionMission/VisionMission";
import WhyChooseUs from"../../WhyChooseUs/WhyChooseUs";
import Testimonials from "../../Testimonials/Testimonials";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";

const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/meabhisingh";
  };

  return (
    <>
      <div className="about-banner">
        {/* <h1>About Us</h1> */}
        {/* <p>
          At Absolut Numbro, we blend ancient astrological wisdom with modern insights. 
        </p> */}
      </div>
      <section className="about-intro">
        <h2>About Us</h2>
        <div className="about-description">
          <p>
            Our mission is to empower you to align your life with the cosmic forces, bringing peace, prosperity, and fulfillment in every aspect of your journey. Whether it's understanding your relationships, overcoming obstacles, or planning for the future, we are here to provide actionable insights tailored to your unique needs.
          </p>
        </div>
      </section>      
      <AboutSection2 />


      <section
  style={{
    padding: "4rem 2rem",
    backgroundColor: "#F9F7FA",
    textAlign: "center",
  }}
>
  <h2
    style={{
      fontSize: "2rem",
      color: "#1e1e6a",
      marginBottom: "2rem",
      position: "relative",
      display: "inline-block",
    }}
  >
    Our Key Services
    <span
      style={{
        content: '""',
        display: "block",
        width: "80px",
        height: "3px",
        backgroundColor: "#f9f7fa",
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
        bottom: "-10px",
        borderRadius: "2px",
      }}
    ></span>
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "2rem",
      marginTop: "2rem",
    }}
  >
    {[
      {
        title: "Lucky Mobile Number",
        description:
          "Get your personalized lucky mobile number for better harmony and success.",
        price: "₹2300",
      },
      {
        title: "Career Analysis",
        description:
          "Personalized career insights based on astrology and numerology.",
        price: "₹2300",
      },
      {
        title: "Marriage Issue",
        description:
          "Astrological solutions for resolving marriage-related problems.",
        price: "₹2300",
      },
      {
        title: "Vastu Consultant",
        description: "Get expert vastu guidance for home or office harmony.",
        price: "₹15000",
      },
      {
        title: "Lucky Car Number",
        description:
          "Find your lucky vehicle number to bring prosperity.",
        price: "₹2300",
      },
      {
        title: "Full Business Consultation",
        description:
          "In-depth business advice using astrological calculations.",
        price: "₹23000",
      },
    ].map((service, index) => (
      <div
        key={index}
        style={{
          backgroundColor: "#fff",
          padding: "2rem",
          borderRadius: "1rem",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          transition: "transform 0.3s ease",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.transform = "translateY(-5px)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.transform = "translateY(0)")
        }
      >
        <h3
          style={{
            color: "#007bff",
            marginBottom: "1rem",
            fontSize: "1.2rem",
          }}
        >
          {service.title}
        </h3>
        <p
          style={{
            color: "#555",
            fontSize: "1rem",
            lineHeight: "1.6",
          }}
        >
          {service.description}
        </p>
        <span
          style={{
            display: "inline-block",
            marginTop: "1rem",
            fontWeight: "bold",
            color: "#28a745",
            fontSize: "1.1rem",
          }}
        >
          {service.price}
        </span>
      </div>
    ))}
  </div>
</section>






      <WhyChooseUs />
      <VisionMission />
      <Testimonials />
    </>
  );  
};

export default About;
