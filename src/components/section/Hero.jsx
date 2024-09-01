// React Hooks
import { useEffect } from 'react';

// Animation Library
import Aos from 'aos';
import 'aos/dist/aos.css';

// Hero Section Bg
import { HeroBg } from '../../assets';

const Hero = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center relative" style={{ backgroundImage: `linear-gradient(rgba(33, 33, 33, 0.658), rgba(33, 33, 33, 0.61)), url('${HeroBg}')` }}>
      <div className="container mx-auto text-center">

        <div className="mb-8">
          <h1 data-aos="fade-up" className="text-white text-4xl sm:text-5xl font-bold leading-tight">
            Plan Your Trip With Travel Dot
          </h1>

          <p data-aos="fade-up" data-aos-duration="2500" className="text-white text-opacity-90 mt-4 text-sm sm:text-base max-w-lg mx-auto">
            Travel to your favourite city with respectful of the environment!
          </p>

          <button data-aos="fade-up" data-aos-duration="3000" className="mt-6 px-6 py-3 bg-primary/45  hover:bg-hover text-white font-medium rounded-full">
            Explore Now
          </button>
        </div>

      </div>
    </section>
  );
}

export default Hero;