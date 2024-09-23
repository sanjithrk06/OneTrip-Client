//Icons import
import { FaBed, FaBath, FaWifi, FaUserFriends, FaMapMarkerAlt } from 'react-icons/fa';
import { GiPathDistance, GiSandsOfTime } from 'react-icons/gi';
import { IoFastFoodOutline } from 'react-icons/io5';

// Animation 
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';


const Stay = ({ hotels }) => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

  return (
    <section className="pt-12 bg-white pb-12">
      <div className="container mx-auto px-4">
        
        {/* Header Section */}
        <div className="flex justify-center items-center mb-8">
          <div className="text-center">
            <h2 className="text-4xl text-black font-bold mb-4"
            data-aos="fade-right">Stay</h2>
            <p className="text-lg text-gray-600"
            data-aos="fade-right">
              From historical cities to natural spectaculars, come see the best of the world!
            </p>
          </div>
        </div>

        {/* Hotels Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 max-w-fit mx-auto">
          {hotels.map((hotel, index) => (
            <div key={index} className="bg-white p-2 shadow-lg rounded-2xl overflow-hidden hover:-translate-y-4  duration-300">
              <img className="w-full rounded-xl h-40 object-cover" src={hotel.imgSrc} alt={hotel.name} />
              <div className="pt-4 px-2">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-bold text-gray-800">{hotel.name}</h3>
                  <p className="text-orange-500 font-bold text-base">{hotel.price}</p>
                </div>
                {/* Features */}
                <div className="grid grid-cols-3 gap-4 mb-4 text-black text-sm">
                  <div className="flex items-center">
                    <FaBed className="text-gray-600 mr-2" />
                    <span>{hotel.beds}</span>
                  </div>
                  <div className="flex items-center">
                    <FaBath className="text-gray-600 mr-2" />
                    <span>{hotel.baths}</span>
                  </div>
                  <div className="flex items-center">
                    <FaWifi className="text-gray-600 mr-2" />
                  </div>
                  <div className="flex items-center">
                    <FaUserFriends className="text-gray-600 mr-2" />
                    <span>{hotel.capacity}</span>
                  </div>
                  <div className="flex items-center">
                    <GiSandsOfTime className="text-gray-600 mr-2" />
                    <span>{hotel.time}</span>
                  </div>
                  <div className="flex items-center">
                    <IoFastFoodOutline className='text-gray-600 mr-2' />
                    <span>{hotel.hours}</span>
                  </div>
                </div>
                <div className="flex flex-row gap-4 mb-4 text-black text-sm">
                  <button className="bg-orange-500 text-white px-4 py-2 rounded-full w-full flex items-center justify-center">
                    Location <FaMapMarkerAlt className="ml-2" />
                  </button>
                  <div className="flex items-center">
                    <GiPathDistance className="text-gray-600 mr-2" />
                    <span>{hotel.distance}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stay;
