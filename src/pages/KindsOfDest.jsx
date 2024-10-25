// Components import 
import { GHero, ListDestinations } from "../components";

// Constant Data import
import { KindsOfDestDetails } from "../constants/constant";

// Bannar Image import
import { munnar } from "../assets";


const KindsOfDest = () => {

  return (
    <>
      <GHero 
        header={"Destinations"} 
        desc={"test description"} 
        img={munnar} 
      />
      <ListDestinations
        title={KindsOfDestDetails.title} 
        subTitle ={KindsOfDestDetails.subTitle} 
        lists={KindsOfDestDetails.destinations}  
      />
    </>
  )
}

export default KindsOfDest;