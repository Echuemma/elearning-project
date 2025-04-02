import React, { useEffect, useState } from 'react';
import health1 from "../../assets/images/health1.jpg";
import health2 from "../../assets/images/health2.jpg";
import health3 from "../../assets/images/health3.jpg";
import health4 from "../../assets/images/health4.jpg";
import health5 from "../../assets/images/health5.jpg";

const MedicalMarquee = () => {
  const [position, setPosition] = useState(0);
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setPosition(prevPosition => (prevPosition - 1) % 1200);
    }, 30);
    
    return () => clearInterval(intervalId);
  }, []);


  const images = [
    { id: 1, src: health1, alt: "Doctor with mask and stethoscope" },
    { id: 2, src: health2, alt: "Patient undergoing medical scan" },
    { id: 3, src: health3, alt: "Smiling nurse in blue scrubs" },
    { id: 4, src: health4, alt: "Doctor with glasses and stethoscope" },
    { id: 5, src: health5, alt: "Medical laboratory equipment" }
  ];

  return (
    <div className="w-full overflow-hidden bg-blue-50 p-6 rounded-lg shadow-md">
      
      <div className="relative h-64 overflow-hidden">
        <div 
          className="absolute flex gap-4 transition-transform duration-2500 ease-linear"
          style={{ transform: `translateX(${position}px)` }}
        >
          {images.map(img => (
            <div key={img.id} className="flex-shrink-0 w-64 h-64 bg-white rounded-lg overflow-hidden shadow-lg">
              <img 
                src={img.src} 
                alt={img.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}

          {images.map(img => (
            <div key={`dup-${img.id}`} className="flex-shrink-0 w-64 h-64 bg-white rounded-lg overflow-hidden shadow-lg">
              <img 
                src={img.src} 
                alt={img.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default MedicalMarquee;