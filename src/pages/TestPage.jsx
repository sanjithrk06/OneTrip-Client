// Components import 
import { munnar } from "../assets";
import { GHero, KindOfDestination } from "../components";

const TestPage = () => {
  return (
    <>
    <GHero header={"Destinations"} desc={"test description"} img={munnar} />
    <KindOfDestination />
    <div className=' h-screen pt-20'>TestPage</div>
    </>
  )
}

export default TestPage