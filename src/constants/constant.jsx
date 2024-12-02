import {
  card1,
  card2,
  card3,
  card4,
  card5,
  tajMahal,
  GOI,
  redFort,
  Ladak,
  Charminar,
  Baga,
  munnar,
  Mysuru,
  h1,
  h2,
  h3,
  taj1,
  taj2,
  taj3,
  taj4,
  taj5,
} from "../assets";
import {
  AppstoreOutlined,
  HomeOutlined,
  EnvironmentOutlined,
  FundViewOutlined,
} from "@ant-design/icons";

export const adminNav = [
  {
    key: "dashboard",
    label: "Dashboard",
    icon: <HomeOutlined />,
    path: "/dashboard",
  },
  {
    key: "places",
    label: "Destinations",
    icon: <EnvironmentOutlined />,
    children: [
      {
        key: "destinations",
        label: "Destinations",
        path: "/dashboard/destinations",
      },
      {
        key: "add-destination",
        label: "Add Destination",
        path: "/dashboard/addDestination",
      },
    ],
  },
  {
    key: "package",
    label: "Package",
    icon: <AppstoreOutlined />,
    children: [
      {
        key: "packages",
        label: "Packages",
        path: "/dashboard/packages",
      },
      {
        key: "add-package",
        label: "Add Package",
        path: "/dashboard/addPackage",
      },
    ],
  },
  {
    key: "request",
    label: "Requests",
    icon: <FundViewOutlined />,
    children: [
      {
        key: "requestList",
        label: "Requests List",
        path: "/dashboard/requests",
      },
    ],
  },
];

export const navItems = [
  { label: "Home", to: "/" },
  { label: "Destinations", to: "/destinations" },
  { label: "Packages", to: "/packages" },
  { label: "Suggest Hidden Spot", to: "/hiddenSpot" },
  {
    label: "Apply for eVisa",
    to: "https://indianvisaonline.gov.in/evisa/tvoa.html",
  },
];

export const footerInformation = [
  { label: "Home", to: "#" },
  { label: "Explore", to: "#" },
  { label: "Packages", to: "#" },
  { label: "Blog", to: "#" },
];

export const KindsOfDestDetails = {
  title: "Kinds of Destinations",
  subTitle:
    "From historical cities to natural spectacles, come see the best of the world!",
  destinations: [
    {
      id: 1,
      title: "Famous",
      imgSrc: card1,
      alt: "Image of Famous Place",
      route: "famous",
    },
    {
      id: 2,
      title: "Hill Stations",
      imgSrc: card2,
      alt: "Image of Hill Station",
      route: "hillStation",
    },
    {
      id: 3,
      title: "Spiritual",
      imgSrc: card3,
      alt: "Image of Spiritual Place",
      route: "spiritual",
    },
    {
      id: 4,
      title: "Heritage",
      imgSrc: card4,
      alt: "Image of Heritage Site",
      route: "heritage",
    },
    {
      id: 5,
      title: "Beach",
      imgSrc: card5,
      alt: "Image of Beach Place",
      route: "beach",
    },
  ],
};

export const destinations = {
  famous: {
    title: "Famous Destinations",
    subTitle: "Explore historical cities and renowned landmarks!",
    destinations: [
      {
        title: "Taj Mahal",
        imgSrc: tajMahal,
        alt: "Agra",
        location: "Agra",
        route: "/taj",
      },
      {
        title: "Red Fort",
        imgSrc: redFort,
        alt: "Delhi",
        location: "Delhi",
        route: "",
      },
      {
        title: "Gateway Of India",
        imgSrc: GOI,
        alt: "Maharashtra",
        location: "Maharashtra",
        route: "",
      },
      {
        title: "Ladakh",
        imgSrc: Ladak,
        alt: "Kashmir",
        location: "Kashmir",
        route: "/ladakh",
      },
      {
        title: "Charminar",
        imgSrc: Charminar,
        alt: "Telangana",
        location: "Telangana",
        route: "",
      },
      {
        title: "Baga Beach",
        imgSrc: Baga,
        alt: "Goa",
        location: "Goa",
        route: "",
      },
      {
        title: "Munnar",
        imgSrc: munnar,
        alt: "Kerala",
        location: "Kerala",
        route: "/munnar",
      },
      {
        title: "Mysuru Palace",
        imgSrc: Mysuru,
        alt: "Karnataka",
        location: "Karnataka",
        route: "",
      },
    ],
  },
  hillStation: {
    title: "Hill Station Destinations",
    subTitle: "Enjoy serene views from the best hill stations!",
    destinations: [],
  },
};

export const dTajMahal = {
  title: "Taj Mahal",
  subTitle: "Famous place in India",
  imgSrc: taj1,
  stays: [
    {
      name: "Hotel Moti Palace",
      price: "₹1296",
      beds: 2,
      baths: 1,
      wifi: true,
      capacity: 4,
      distance: "4.2km",
      time: "12mins",
      hours: "24 hrs",
      location: "Agra",
      imgSrc: h1,
    },
    {
      name: "Imperial Hotel",
      price: "₹3347",
      beds: 2,
      baths: 1,
      wifi: true,
      capacity: 4,
      distance: "3.5km",
      time: "12mins",
      hours: "24 hrs",
      location: "Agra",
      imgSrc: h2,
    },
    {
      name: "Hotel Orange",
      price: "₹2599",
      beds: 2,
      baths: 1,
      wifi: true,
      capacity: 4,
      distance: "4km",
      time: "10mins",
      hours: "24 hrs",
      location: "Agra",
      imgSrc: h3,
    },
  ],
  gallery: [taj2, taj3, taj4, taj5],
  about: `The Taj Mahal is a white marble mausoleum located in Agra, India. It was built by the Mughal emperor Shah Jahan in memory of his beloved wife, Mumtaz Mahal, who died in 1631. Construction of the Taj Mahal began in 1632 and was completed in 1653.

The Taj Mahal is considered one of the most beautiful buildings in the world and is a UNESCO World Heritage Site. It is renowned for its stunning architecture and intricate carvings, which are made from a variety of precious and semi-precious stones such as lapis lazuli, turquoise, and malachite.

The main building of the Taj Mahal is surrounded by a large garden, reflecting pools, and other structures such as a mosque and a guest house. The main entrance to the complex is through a gateway made of red sandstone, which is decorated with calligraphy and geometric patterns.

The interior of the Taj Mahal is equally stunning, with intricate carvings and inlaid designs covering the walls and ceilings. The centerpiece of the mausoleum is the tomb of Mumtaz Mahal, which is made of white marble and decorated with intricate carvings and calligraphy.

The Taj Mahal is considered a masterpiece of Mughal architecture and is visited by millions of tourists every year. It is a symbol of love and devotion and remains one of the most popular landmarks of India.
  `,
  spots: [
    {
      title: "Taj Mahal",
      imgSrc: tajMahal,
      alt: "Agra",
      location: "Agra",
      route: "",
    },
    {
      title: "Red Fort",
      imgSrc: redFort,
      alt: "Delhi",
      location: "Delhi",
      route: "",
    },
    {
      title: "Gateway Of India",
      imgSrc: GOI,
      alt: "Maharashtra",
      location: "Maharashtra",
      route: "",
    },
    {
      title: "Ladakh",
      imgSrc: Ladak,
      alt: "Kashmir",
      location: "Kashmir",
      route: "",
    },
    {
      title: "Charminar",
      imgSrc: Charminar,
      alt: "Telungana",
      location: "Telangana",
      route: "",
    },
    {
      title: "Baga Beach",
      imgSrc: Baga,
      alt: "Goa",
      location: "Goa",
      route: "",
    },
    {
      title: "Munnar",
      imgSrc: munnar,
      alt: "Kerala",
      location: "Kerala",
      route: "",
    },
    {
      title: "Mysuru Palace",
      imgSrc: Mysuru,
      alt: "Karnataka",
      location: "Karnataka",
      route: "",
    },
  ],
};
