import React, { useState, useEffect } from 'react';
import Button from '../../components/Button';
import { HiMenu, HiX } from 'react-icons/hi';
import AOS from 'aos';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: false
    });
  }, []);

  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="font-medium text-green-800">Logo</div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
  <a href="/" className="!text-[#1B5C12] font-medium border-b-2 border-green-800">Home</a>
  <a href="/dashboard" className="text-gray-500 hover:text-[#1B5C12]">Dashboard</a>
  <a href="/courses" className="text-gray-500 hover:text-[#1B5C12]">Courses</a>
  <a href="/teach" className="text-gray-500 hover:text-[#1B5C12]">Teach On Maverick</a>
</div>


        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button text="Login" />
          <Button text="Sign up" />
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? 
            <HiX size={28} className="text-green-800" /> : 
            <HiMenu size={28} className="text-green-800" />
          }
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mt-4 md:hidden overflow-hidden">
          <div className="flex flex-col items-start space-y-4 pl-2">
            <a 
              href="/" 
              className="text-green-800 font-medium border-b-2 border-green-800 w-full"
              data-aos="fade-right" 
              data-aos-delay="100"
            >
              Home
            </a>
            <a 
              href="/dashboard" 
              className="text-gray-500 hover:text-gray-700 w-full"
              data-aos="fade-right" 
              data-aos-delay="150"
            >
              Dashboard
            </a>
            <a 
              href="/courses" 
              className="text-gray-500 hover:text-gray-700 w-full"
              data-aos="fade-right" 
              data-aos-delay="200"
            >
              Courses
            </a>
            <a 
              href="/teach" 
              className="text-gray-500 hover:text-gray-700 w-full"
              data-aos="fade-right" 
              data-aos-delay="250"
            >
              Teach On Maverick
            </a>

            <div className="flex flex-col space-y-2 w-full" data-aos="fade-right" data-aos-delay="300">
              <Button text="Login" className="justify-start px-0" />
              <Button text="Sign up" className="justify-start px-0" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;