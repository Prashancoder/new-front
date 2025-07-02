import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { getServices } from "../../actions/serviceAction";
import ServiceCard from "../ServiceCard/ServiceCard";
import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader/Loader";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import Testimonials from "../Testimonials/Testimonials";
import VisionMission from "../VisionMission/VisionMission";

import "./Services.css";

const Services = () => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { loading, error, services } = useSelector((state) => state.services);

  useEffect(() => {
    if (error) {
      alert.error(error);
    }
    dispatch(getServices());
  }, [dispatch, alert, error]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title="Services - Astro World" />
          
          <div className="services-banner">
            {/* <h1>Our Services</h1>
            <p>Discover our comprehensive range of astrological services</p> */}
          </div>

          <section className="services-intro">
            <h2>Our Services</h2>
            <div className="services-description">
              <p>
                Experience the power of ancient wisdom combined with modern expertise. Our comprehensive range of astrological services is designed to guide you through life's journey with clarity and purpose. From personalized horoscope readings to relationship compatibility analysis, our expert astrologers provide insights that help you make informed decisions and achieve harmony in all aspects of life.
              </p>
            </div>
          </section>

          <section className="services-showcase">
            <div className="services-container">
              {services &&
                services.map((service) => (
                  <ServiceCard key={service._id} service={service} />
                ))}
            </div>
          </section>

          <WhyChooseUs />
          <VisionMission />
          <Testimonials />
        </>
      )}
    </>
  );
};

export default Services; 