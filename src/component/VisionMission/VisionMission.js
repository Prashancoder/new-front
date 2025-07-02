import React from "react";
import { FaEye, FaBullseye } from "react-icons/fa";

const VisionMission = () => {
  return (
    <section
      style={{
        padding: "5rem 2rem",
                      backgroundColor: "#f9f7fa",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h2
        style={{
          fontSize: "2.5rem",
          color: "#2C3E50",
          marginBottom: "3rem",
          fontWeight: "700",
          textAlign: "center",
        }}
      >
        Our Vision & Mission
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "2rem",
        }}
      >
        {/* Vision Card */}
        <div
          style={{
            flex: "1 1 300px",
            background: "#fff",
            borderRadius: "1rem",
            padding: "2rem",
            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "translateY(-5px)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "translateY(0)")
          }
        >
          <div style={{ textAlign: "center", marginBottom: "1rem" }}>
            <FaEye size={40} color="#007BFF" />
          </div>
          <h3
            style={{
              color: "#2C3E50",
              fontSize: "1.5rem",
              marginBottom: "1rem",
              textAlign: "center",
            }}
          >
            Our Vision
          </h3>
          <p style={{ color: "#000", fontSize: "1.1rem", lineHeight: "1.8" }}>
            To create a conscious, awakened society where individuals live with clarity,
            purpose, and harmony. We envision a world guided by cosmic intelligence—
            where personal and collective growth are aligned with universal truth.
          </p>
        </div>

        {/* Mission Card */}
        <div
          style={{
            flex: "1 1 300px",
            background: "#fff",
            borderRadius: "1rem",
            padding: "2rem",
            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "translateY(-5px)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "translateY(0)")
          }
        >
          <div style={{ textAlign: "center", marginBottom: "1rem" }}>
            <FaBullseye size={40} color="#007BFF" />
          </div>
          <h3
            style={{
              color: "#2C3E50",
              fontSize: "1.5rem",
              marginBottom: "1rem",
              textAlign: "center",
            }}
          >
            Our Mission
          </h3>
          <p style={{ color: "#000", fontSize: "1.1rem", lineHeight: "1.8" }}>
            Our mission is to empower individuals through ancient sciences like astrology,
            numerology, and Vastu. We strive to offer clear, practical guidance that brings
            peace in relationships, clarity in career, strength in decisions, and spiritual
            balance in life’s journey.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
