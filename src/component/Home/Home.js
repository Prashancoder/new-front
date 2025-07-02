import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/cg";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import ServiceCard from "../ServiceCard/ServiceCard";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { getServices } from "../../actions/serviceAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import AboutSection from "../AboutSection/AboutSection";
import Testimonials from "../Testimonials/Testimonials";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs"
import VisionMission from "../VisionMission/VisionMission";
import { Link } from "react-router-dom";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading: productsLoading, error: productsError, products } = useSelector((state) => state.products);
  const { loading: servicesLoading, error: servicesError, services } = useSelector((state) => state.services);

  useEffect(() => {
    if (productsError) {
      alert.error(productsError);
      dispatch(clearErrors());
    }
    if (servicesError) {
      alert.error(servicesError);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
    dispatch(getServices());
  }, [dispatch, productsError, servicesError, alert]);

  return (
    <Fragment>
      {(productsLoading || servicesLoading) ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="Absolute astro service " />

          <div className="banner">

           
          </div>

          <AboutSection />

          {/* SERVICES SECTION */}
          <section className="services-preview-modern">
            <h2 className="section-heading">
              Our Key Services
              <span className="heading-underline"></span>
            </h2>

            <div className="services-description-modern">
              <p>
                We offer a range of services that are rooted in deep traditional wisdom combined with modern insights. Whether it's Mobile Numerology, Vedic Astrology, Name Correction, or Business Consultation – each service is crafted to give you the maximum transformation in your personal and professional life.
              </p>
            </div>

            <div className="container">
              {services && services.slice(0, 6).map((service) => (
                <ServiceCard key={service._id} service={service} />
              ))}
            </div>
         <br/>
            <Link to="/services" className="view-more-button">View All Services</Link>
          </section>

          {/* PRODUCTS SECTION */}
          <section className="products-preview">
            <h2>Featured Products</h2>
            <div className="container" id="container">
              {products && products.slice(0, 6).map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>   <br/>
            <Link to="/products" className="view-more-button">View All Products</Link>
          </section>

          <WhyChooseUs />
          <VisionMission />
          <Testimonials />
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
