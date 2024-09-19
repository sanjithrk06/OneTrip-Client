// Components import 
import { munnar } from "../assets";
import { card1, card2, card3, card4, card5 } from '../assets';
import { GHero, KindOfDestination } from "../components";

const destinations = [
  { title: 'Famous', imgSrc: card1, alt: 'Image of Famous Place', location: 'Famous', route: '/test/famous' },
  { title: 'Hill Stations', imgSrc: card2, alt: 'Image of Hill Station', location: 'Hill Station', route: '/test/hill-stations' },
  { title: 'Spiritual', imgSrc: card3, alt: 'Image of Spiritual Place', location: 'Spiritual', route: '/test/spiritual' },
  { title: 'Heritage', imgSrc: card4, alt: 'Image of Heritage Site', location: 'Heritage', route: '/test/heritage' },
  { title: 'Beach', imgSrc: card5, alt: 'Image of Beach Place', location: 'Beach', route: '/test/beach' },
];

const TestPage = () => {
  return (
    <>
    <GHero header={"Destinations"} desc={"test description"} img={munnar} />
    <KindOfDestination destinations={destinations} title={"Kinds Of Destinations"} subTitle ={"From historical cities to natural spectacles, come see the best of the world!"}  />
    <div className=' h-screen pt-20'>TestPage</div>
    </>
  )
}

export default TestPage