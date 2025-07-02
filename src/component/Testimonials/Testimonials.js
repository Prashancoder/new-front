import React from 'react';
import Slider from 'react-slick';
import './Testimonials.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import naveen from '../../images/11.jpeg';
import Naresh from '../../images/22.jpeg';
import Sunny from '../../images/33.jpeg';
import Nishant from '../../images/44.jpeg';
import Vinayak from '../../images/55.jpeg';
import Sunil from '../../images/66.jpeg';
import Bharpur from '../../images/77.jpeg';
import Mandeep from '../../images/88.jpeg'; 
import Kesav from '../../images/99.jpeg';
import pawan from '../../images/111.jpeg';
import ajit from '../../images/222.jpeg';
import ravindra from '../../images/333.jpeg';
import manmohan from '../../images/444.jpeg';
import khushboo from '../../images/555.jpeg';
import harman from '../../images/666.jpeg';
import Harish from '../../images/777.jpeg';
import Shubhash from '../../images/888.jpeg';
const testimonialsData = [
  {
    id: 1,
    name: "Naveen Kumar Singal",
    role: "Crypto Trader",
    image: naveen,
    text: "Abhay Kumar SharmaGmobile numerology helped me achieve career growth. Thank you Absolute Numbero  Astro Services!"
  },
  {
    id: 2,
    name: "Naresh Goyal",
    role: "Businessman",
    image: Naresh,
    text: "The horoscope reading was spot on. Helped me make crucial business decisions. Highly recommend!"
  },
  {
    id: 3,
    name: "Sunny Kumar Jeengar",
    role: "Property Dealer",
    image: Sunny,
    text: "Thanks to Guruji’s Vastu advice, our home now feels more peaceful and balanced."
  },
  {
    id: 4,
    name: "Nishant Sharma",
    role: "Agency Manager",
    image: Nishant,
    text: "I got a lucky business name based on numerology. My clientele doubled in just 3 months!"
  },
  {
    id: 5,
    name: "Vinayak Sankpal",
    role: "Private Job",
    image: Vinayak,
    text: "My concentration and confidence improved after a name correction session with Absolute Numbero  Astro Services."
  },
  {
    id: 6,
    name: "Sunil Kumar",
    role: "Wellness Coach",
    image: Sunil,
    text: "Family harmony returned after following Vastu remedies given by Guruji."
  },
  {
    id: 7,
    name: "Bharpur Singh",
    role: "Photographer",
    image: Bharpur,
    text: "My startup flourished after choosing a lucky number suggested by Guruji. Deeply grateful!"
  },
  {
    id: 8,
    name: "Meenu sharma",
    role: "Policy Advisor - LIC",
    image: Mandeep,
    text: "I now feel a strong sense of direction in my career. Numerology changed my perspective completely."
  },
  {
    id: 9,
    name: "Kesav",
    role: "Store Manager",
    image: Kesav,
    text: "Workplace stress reduced drastically after applying Guruji’s numerology-based changes in my office."
  },
  {
    id: 10,
    name: "Pawan Chhipa",
    role: "Self Employed",
    image: pawan,
    text: "A simple name change brought unexpected success in my freelance work. Highly grateful to Guruji!"
  },
  {
    id: 11,
    name: "Ajit Pal Singh",
    role: "Bar & Restaurant Owner", 
    image: ajit,
    text: "Customer footfall increased after applying Vastu changes in my restaurant. It truly works!"
  },
  {
    id: 12,
    name: "Ravindra Singh Rathore",
    role: "Student",     
    image: ravindra,
    text: "After a numerology consultation, my focus improved and I scored higher in exams."
  },
  {
    id: 13,
    name: "Manmohan Singh",
    role: "Branch Manager",
    image: manmohan,
    text: "My transfer issue was resolved smoothly after a detailed horoscope analysis by Guruji "
  },
  {
    id: 14,
    name: "Khushboo",  
    role: "Professional Teacher",
    image: khushboo,
    text: "My classroom environment improved after following Guruji's energy-balancing suggestions."
  },
  {
    id: 15,     
    name: "Harman Singh Aujla",
    role: "Entrepreneur",
    image: harman,
    text: "Ghelped me choose an auspicious date and name for my new venture. Results are amazing!"
  },
  {
    id: 16,
    name: "Harish Ojha",
    role: "Ayurvedic Products Trader (Pan India)",
    image: Harish,
    text: "Sales improved dramatically after following numerological suggestions for my business branding."
  },
  {
    id: 17,
    name: "Shubhash Chander",
    role: "Police Officer",
    image: Shubhash,
    text: "Mental peace and clarity returned in my life after a detailed session with Guruji."
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <section className="testimonials-section">
      <h2>What Our Clients Say</h2>
      <p className="subtitle">Real Experiences | Real Transformations | Guided by Abhay Kumar Sharma      </p>
      <div className="carousel-wrapper">
        <Slider {...settings}>
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-image">
                <img src={testimonial.image} alt={testimonial.name} />
              </div>
              <p className="testimonial-text">“{testimonial.text}”</p>
              <h4>{testimonial.name}</h4>
              <p className="testimonial-role">{testimonial.role}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
