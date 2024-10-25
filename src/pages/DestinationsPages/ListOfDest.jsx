import { useParams } from 'react-router-dom';
import { GHero, ListDestinations } from '../../components';
import { destinations } from '../../constants/constant';
import { munnar } from '../../assets';

const ListOfDest = () => {
  const { category } = useParams(); // Get the category from the URL
  const destData = destinations[category.toLowerCase()]; // Convert to lowercase and access

  if (!destData) return <p>Destination not found</p>; // Handle invalid category

  return (
    <>
      <GHero header={destData.title} desc={destData.subTitle} img={munnar} />
      <ListDestinations 
        title={destData.title} 
        subTitle={destData.subTitle} 
        lists={destData.destinations} 
      />
    </>
  );
};

export default ListOfDest;