import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./style.css";

const HealthEducationBanner = () => {
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false
    });
  }, []);

  return (
    <div className="banner w-full bg-blue-50 rounded-lg p-8 flex flex-col items-center justify-center text-center">
      <h1 
        className="text-3xl font-bold mb-2"
        data-aos="fade-up"
      >
        Get Health <span className="text-green-600">Education</span> And Stay Proficient!
      </h1>
      <p 
        className="text-gray-700 mb-6"
        data-aos="fade-down"
        data-aos-delay="200"
      >
        Maverick Online learning platform for all your health needs
      </p>
      <div className="button-container" data-aos="fade-up" data-aos-delay="400">
        <button className="button secondary-button">
          <svg className="play-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <polygon points="10 8 16 12 10 16 10 8"></polygon>
          </svg>
          Watch Video
        </button>
        <button className="button primary-button">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HealthEducationBanner;