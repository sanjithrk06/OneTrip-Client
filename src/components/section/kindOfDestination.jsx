import Cards from '../general/Cards';
import 'aos/dist/aos.css'

const KindsOfDestinations = ({ destinations, title, subTitle}) => (
  <div className="container mx-auto px-4 py-8 bg-white">
    <div className="text-left pl-5 mb-8 ">
        <h2 className="text-3xl font-bold text-black" data-aos = "fade-right" daya-aos-duration = "2000">{title}</h2>
        (subTitle 
        ?<p className="text-gray-600" data-aos="fade-right" data-aos-duration="2500">
            {subTitle}
        </p>
        : <p></p> )
        
    </div>
    
        <div className="pl-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 content-center"  data-aos="fade-up" data-aos-duration="2500">
          {destinations.map(({ id, imgSrc, destTitle, location, route }) => (
          <Cards key={id} image={imgSrc} destTitle={destTitle} location={location} route={route} />

          ))}
        </div>
  </div>
);

export default KindsOfDestinations;
