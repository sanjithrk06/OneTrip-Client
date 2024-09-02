import React from 'react';
import { card1, card2, card3, card4, card5 } from '../../assets';
import 'aos/dist/aos.css'

const destinations = [
  { title: 'Famous', imgSrc: card1, alt: 'Image of Famous Place', location: 'Famous' },
  { title: 'Hill Stations', imgSrc: card2, alt: 'Image of Hill Station', location: 'Hill Station' },
  { title: 'Spiritual', imgSrc: card3, alt: 'Image of Spiritual Place', location: 'Spiritual'},
  { title: 'Heritage', imgSrc: card4, alt: 'Image of Heritage Site', location: 'Heritage'},
  { title: 'Another', imgSrc: card5, alt: 'Image of Another Place', location:'Beach' },
];
;

const DestinationCard = ({ image, destTitle, location }) => (
  <div className="bg-white shadow-2xl rounded-lg overflow-hidden w-full sm:w-72 relative">
    <div className="relative group">
      <img src={image} alt={destTitle} className="w-full h-48 object-cover transition-transform duration-1000 ease-in-out " />
      {/* Overlay that appears on hover */}
      {/* <div className="absolute inset-0 bg-gray-800 bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 flex justify-center items-center"> */}
      <div className="absolute inset-0 bg-gray-800 bg-opacity-50 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform -translate-y-40 duration-1000 flex justify-center items-center">

        <p className="text-white text-lg font-semibold">{location}</p>
      </div>
    </div>
    <div className="p-4 flex justify-between items-center">
      <h3 className="text-lg font-bold text-gray-800">{destTitle}</h3>
      <div className="flex items-center space-x-1">
        <span className="h-2 w-2 rounded-full bg-orange-500 inline-block"></span>
        <p className="text-sm text-gray-600">{location}</p>
      </div>
    </div>
  </div>
);


const KindsOfDestinations = () => (
  <div className="container mx-auto px-4 py-8 bg-white">
    <div className="text-left pl-5 mb-8 ">
        <h2 className="text-3xl font-bold text-black">Kinds Of Destinations</h2>
        <p className="text-gray-600" data-aos="fade-right" data-aos-duration="2500">
            From historical cities to natural spectacles, come see the best of the world!
        </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations.map(({ id, imgSrc, destTitle, location, tag }) => (
            <DestinationCard key={id} image={imgSrc} destTitle={destTitle} location={location} />

          ))}
        </div>
  </div>
);

export default KindsOfDestinations;
