import { useParams } from 'react-router-dom';
import { GHero, ListDestinations } from '../../components';
import { destinations } from '../../constants/constant'; 
import { munnar } from '../../assets'; 

const ListOfDest = () => {
  const { category } = useParams(); // Get the category from the URL
  const destData = destinations[category.toLowerCase()]; // Retrieve category data dynamically

  // Handle invalid category or missing data
  if (!destData) {
    return <p>Destination category not found.</p>; 
  }

  return (
    <>
      <GHero header={destData.title} desc={destData.subTitle} img={munnar} />
      <ListDestinations
        title={destData.title}
        subTitle={destData.subTitle}
        lists={destData.destinations} 
        category={category}
      />
    </>
  );
};

export default ListOfDest;
