import { card1, card2, card3, card4, card5, tajMahal, GOI, redFort, Ladak, Charminar, Baga, munnar, Mysuru } from '../assets';

export const navItems = [
  { label: "Home", to: "/" },
  { label: "Destinations", to: "/destinations" },
  { label: "Packages", to: "#" },
  { label: "Apply for eVisa", to: "#" },
];

export const footerInformation = [
  { label: "Home", to: "#"},
  { label: "Explore", to: "#"},
  { label: "Packages", to: "#"},
  { label: "Blog", to: "#"}
];

export const KindsOfDestDetails = {
  title: "Kinds of Destinations",
  subTitle: "From historical cities to natural spectacles, come see the best of the world!",
  destinations: [
    { id:1, title: 'Famous', imgSrc: card1, alt: 'Image of Famous Place',  route: '/destinations/famous' },
    { id:2, title: 'Hill Stations', imgSrc: card2, alt: 'Image of Hill Station', route: '/destinations/hill-stations' },
    { id:3, title: 'Spiritual', imgSrc: card3, alt: 'Image of Spiritual Place',  route: '/destinations/spiritual' },
    { id:4, title: 'Heritage', imgSrc: card4, alt: 'Image of Heritage Site',  route: '/destinations/heritage' },
    { id:5, title: 'Beach', imgSrc: card5, alt: 'Image of Beach Place',  route: '/destinations/beach' }
  ]
};

export const destinations = {
  famous: {
    title: "Famous Destinations",
    subTitle: "Explore historical cities and renowned landmarks!",
    destinations: [
      { title: 'Taj Mahal', imgSrc: tajMahal, alt: 'Agra', location: 'Agra', route: '' },
      { title: 'Red Fort', imgSrc: redFort, alt: 'Delhi', location: 'Delhi', route: '' },
      { title: 'Gateway Of India', imgSrc: GOI, alt: 'Maharashtra', location: 'Maharashtra', route: '' },
      { title: 'Ladakh', imgSrc: Ladak, alt: 'Kashmir', location: 'Kashmir', route: '' },
      { title: 'Charminar', imgSrc: Charminar, alt: 'Telangana', location: 'Telangana', route: '' },
      { title: 'Baga Beach', imgSrc: Baga, alt: 'Goa', location: 'Goa', route: '' },
      { title: 'Munnar', imgSrc: munnar, alt: 'Kerala', location: 'Kerala', route: '' },
      { title: 'Mysuru Palace', imgSrc: Mysuru, alt: 'Karnataka', location: 'Karnataka', route: '' },
    ]
  },
  hillStation: {
    title: "Hill Station Destinations",
    subTitle: "Enjoy serene views from the best hill stations!",
    destinations: []
  }
};
