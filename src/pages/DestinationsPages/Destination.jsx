import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { About, DestHero, Gallery, ListDestinations, Stay } from '../../components';

const DestinationPage = () => {
  const { name } = useParams();
  const [destination, setDestination] = useState(null);

  useEffect(() => {
    const fetchDestination = async () => {
      try {
        const response = await fetch(`http://localhost:5001/api/destinationPage/single-page/${name}`);
        const data = await response.json();
        setDestination(data.data);
        console.log(data)
      } catch (error) {
        console.error('Error fetching destination:', error);
      }
    };

    fetchDestination();
  }, [name]);

  if (!destination) return <p>Loading...</p>;

  return (
    <>
      <DestHero img={destination.imgSrc} title={destination.title} subTitle={destination.subTitle} />
      <About content={destination.about}/>
      <Gallery images={destination.gallery}/>
      <ListDestinations lists={destination.spots} title="Places Nearby" subTitle="Explore nearby attractions" />
      <Stay hotels={destination.stays} />
    </>
  );
};

export default DestinationPage;
