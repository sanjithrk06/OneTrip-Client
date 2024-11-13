import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import { About, DestHero, Gallery, ListDestinations, Stay } from '../../components';

const DestinationPage = () => {
  const { name } = useParams();
  const [destination, setDestination] = useState(null);

  useEffect(() => {
    const fetchDestination = async () => {
      const cachedDestination = Cookies.get(name) || localStorage.getItem(name);

      if (cachedDestination) {
        setDestination(JSON.parse(cachedDestination));
        localStorage.setItem(name, JSON.stringify(data.data));
        console.log("Using cached data for", name);
      } else {
        try {
          const response = await fetch(`http://localhost:5001/api/destinationPage/single-page/${name}`);
          const data = await response.json();
          setDestination(data.data);

          // Set data in cookies with expiration time
          Cookies.set(name, JSON.stringify(data.data), { expires: 1 });
          
          console.log("Fetched from API and cached data for", name);
        } catch (error) {
          console.error('Error fetching destination:', error);
        }
      }
    };

    fetchDestination();
  }, [name]);

  if (!destination) return <p>Loading...</p>;

  return (
    <>
      <DestHero img={destination.imgSrc} title={destination.title} subTitle={destination.subTitle} />
      <About content={destination.about} />
      <Gallery images={destination.gallery} />
      <ListDestinations lists={destination.spots} title="Places Nearby" subTitle="Explore nearby attractions" />
      <Stay hotels={destination.stays} />
    </>
  );
};

export default DestinationPage;
