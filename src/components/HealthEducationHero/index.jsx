import React from 'react';
import pro from "../../assets/images/pro.jpg";
// import "./style.css"

const HealthEducationHero = () => {
  return (
    <div className="max-w-6xl mx-auto bg-gradient-to-br from-white to-green-50 p-6 rounded-lg relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute bottom-0 left-0 w-32 h-full border-l-4 border-b-4 border-blue-500 opacity-70"></div>
      </div>
      
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 lg:w-2/5">
          <img 
            src={pro}
            alt="Healthcare professional in blue scrubs with stethoscope" 
            className="rounded-lg shadow-md w-full max-w-md mx-auto"
          />
        </div>
        
        <div className="md:w-1/2 lg:w-3/5">
          <h2 className="text-3xl font-bold mb-4">
            Everything <span className="text-green-600">HEALTH</span> Education
          </h2>
          
          <p className="text-gray-700 mb-4">This Platform is aimed at doing the following:</p>
          
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">•</span>
              <p className="text-gray-700">
                To assess the effectiveness of a learning management platform in 
                educating Nigerians on basic health issues, including HIV, 
                Tuberculosis (TB), substance abuse, Polio, and Malaria.
              </p>
            </li>
            
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">•</span>
              <p className="text-gray-700">
                To evaluate the engagement and usability of the platform for the 
                target audience.
              </p>
            </li>
            
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">•</span>
              <p className="text-gray-700">
                To provide actionable insights for improving the platform's 
                content, design, and delivery to maximize learning outcomes. To 
                provide updated & right information on the above mentioned 
                health challenges.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HealthEducationHero;