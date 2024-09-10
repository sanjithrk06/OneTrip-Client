// Components import 
import { GHero, KindOfDestination } from "../components";

const TestPage = () => {
  return (
    <>
    <GHero header={"Destinations"} desc={"test description"} />
    <KindOfDestination />
    <div className=' h-screen pt-20'>TestPage</div>
    </>
  )
}

export default TestPage