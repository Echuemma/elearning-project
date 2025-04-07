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
    <div className="banner w-full bg-blue-50 p-8 flex flex-col items-center justify-center text-center">
      <h1 
        className="text-5xl font-bold mb-2 text-black"
        data-aos="fade-up"
      >
        Get Health <span className="text-[#1B5C12]">Education</span> And Stay <br />  Proficient!
      </h1>
      <p 
        className="text-gray-700 mb-6 text-xl"
        data-aos="fade-down"
        data-aos-delay="200"
      >
        Maverick Online learning platform for all your health needs
      </p>
      <div className="button-container" data-aos="fade-up" data-aos-delay="400">
  <button
    className="button secondary-button border-2 flex items-center gap-2 px-4 py-2 rounded-md"
    style={{ borderColor: '#1B5C12', color: '#1B5C12' }}
  >
    <svg className="play-icon w-6 h-6 " viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#1B5C12" />
      <polygon points="10 8 16 12 10 16 10 8" fill="white" />
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