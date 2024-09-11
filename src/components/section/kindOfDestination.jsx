import {Cards} from '../general/Cards';
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



const KindsOfDestinations = () => (
  <div className="container mx-auto px-4 py-8 bg-white">
    <div className="text-left pl-5 mb-8 ">
        <h2 className="text-3xl font-bold text-black" data-aos = "fade-right" daya-aos-duration = "2000">Kinds Of Destinations</h2>
        <p className="text-gray-600" data-aos="fade-right" data-aos-duration="2500">
            From historical cities to natural spectacles, come see the best of the world!
        </p>
    </div>
    
        <div className="pl-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 content-center"  data-aos="fade-up" data-aos-duration="2500">
          {destinations.map(({ id, imgSrc, destTitle, location, tag }) => (
            <Cards key={id} image={imgSrc} destTitle={destTitle} location={location} />

          ))}
        </div>
  </div>
);

export default KindsOfDestinations;
