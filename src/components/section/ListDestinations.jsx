import { useEffect } from 'react';
import AOS from 'aos';
import Cards from '../general/Cards';
import 'aos/dist/aos.css'

const ListDestinations = ({ lists, title, subTitle }) => {

  useEffect(() => {
    AOS.init({
      once: true
    });
  }, []);

  return (
    <div className="mx-auto px-28 py-20 bg-white">
      <div className="text-left">
        <h2 
          className="text-3xl font-bold text-black" 
          data-aos="fade-right" 
          data-aos-duration="600"
        >
          {title}
        </h2>
        {subTitle && (
          <p className="text-gray-600" data-aos="fade-right" data-aos-duration="800">
            {subTitle}
          </p>
        )}
      </div>
      
      <div 
        className=" m-4 my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 content-center"  
        data-aos="fade-up" 
        data-aos-duration="1000"
      >
        {lists.map(({ id, title, imgSrc, alt, route }, index) => (
          <Cards 
            key={id || index}
            image={imgSrc} 
            imageAlt={alt} 
            title={title} 
            route={route} 
          />
        ))}
      </div>
    </div>
  );
};

export default ListDestinations;