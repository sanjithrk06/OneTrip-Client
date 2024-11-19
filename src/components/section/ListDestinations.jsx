import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import Cards from '../general/Cards'; // Assuming you have a Cards component
import 'aos/dist/aos.css';

const ListDestinations = ({ lists, title, subTitle, category }) => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <div className="mx-auto px-28 py-20 bg-white">
      <div className="text-left">
        <h2 className="text-3xl font-bold text-black" data-aos="fade-right" data-aos-duration="600">
          {title}
        </h2>
        {subTitle && (
          <p className="text-gray-600" data-aos="fade-right" data-aos-duration="800">
            {subTitle}
          </p>
        )}
      </div>

      <div
        className="m-4 my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 content-center"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {Array.isArray(lists) && lists.length > 0 ? (
          lists.map(({ id, title, imgSrc, alt, route }, index) => (
            <Link 
              key={id || index} 
              to={`/destinations/${category}${route}`}  
            >
              <Cards
                image={imgSrc}
                imageAlt={alt || `Image ${index + 1}`}
                title={title}
              />
            </Link>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">No destinations available.</p>
        )}
      </div>
    </div>
  );
};

export default ListDestinations;
