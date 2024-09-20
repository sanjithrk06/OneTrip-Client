import React from 'react';
import 'aos/dist/aos.css'; 
import AOS from 'aos';  
import { useEffect } from 'react';

const About = ({ content }) => {
  // Initialize AOS animation
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="h-screen flex justify-center content-start items-start py-10 bg-white pr-60 pt-28 font-semibold">
      <div data-aos="fade-right" data-aos-duration="2500" className="max-w-4xl">
        <h2 className="text-4xl font-bold mb-6 text-black">About</h2>
        <p className="text-gray-500 text-base  leading-normal whitespace-pre-wrap">
          {content}
        </p>
      </div>
    </div>
  );
};

export default About;
