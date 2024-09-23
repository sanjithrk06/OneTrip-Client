// React Hooks
import { useEffect } from 'react';

// Animation Library
import Aos from 'aos';
import 'aos/dist/aos.css';

const Hero = ({img, title, subTitle}) => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center relative" style={{ backgroundImage: `linear-gradient(rgba(33, 33, 33, 0.658), rgba(33, 33, 33, 0.61)), url('${img}')` }}>
      <div className="container mx-auto text-center">

        <div className="mb-8">
          <h1 data-aos="fade-up" className="text-white text-9xl sm:text-5xl font-bold leading-tight">
            {title}
          </h1>

          <p data-aos="fade-up" data-aos-duration="2500" className="text-white text-opacity-90 mt-4 text-lg sm:text-base max-w-lg mx-auto">
            {subTitle}
          </p>
        </div>

      </div>
    </section>
  );
}

export default Hero;