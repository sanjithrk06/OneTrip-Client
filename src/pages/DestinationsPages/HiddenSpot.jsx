import { GHero } from "../../components";
import { munnar } from "../../assets";

const HiddenSpot = () => {
  return (
    <>
      <GHero
        header={"Suggest Hidden Spot"}
        desc={"Discover the Undiscovered"}
        img={munnar}
      />
    </>
  );
};

export default HiddenSpot;
