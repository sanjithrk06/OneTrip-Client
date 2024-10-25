import { useParams } from 'react-router-dom';
import { About, DestHero, Gallery, ListDestinations, Stay } from '../../components';
import { tajMahal, taj1, taj2, h1 } from '../../assets';

const Destination = () => {
  
  const dTajMahal = {
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
        imgSrc: h1
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
        imgSrc: h1
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
        imgSrc: h1
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
        imgSrc: h1
      }
    ],
    gallery: [
      taj2, taj2, taj2, taj2
    ],
    about: `The Taj Mahal is a white marble mausoleum located in Agra, India. It was built by the Mughal emperor Shah Jahan in memory of his beloved wife, Mumtaz Mahal, who died in 1631. Construction of the Taj Mahal began in 1632 and was completed in 1653.

The Taj Mahal is considered one of the most beautiful buildings in the world and is a UNESCO World Heritage Site. It is renowned for its stunning architecture and intricate carvings, which are made from a variety of precious and semi-precious stones such as lapis lazuli, turquoise, and malachite.

The main building of the Taj Mahal is surrounded by a large garden, reflecting pools, and other structures such as a mosque and a guest house. The main entrance to the complex is through a gateway made of red sandstone, which is decorated with calligraphy and geometric patterns.

The interior of the Taj Mahal is equally stunning, with intricate carvings and inlaid designs covering the walls and ceilings. The centerpiece of the mausoleum is the tomb of Mumtaz Mahal, which is made of white marble and decorated with intricate carvings and calligraphy.

The Taj Mahal is considered a masterpiece of Mughal architecture and is visited by millions of tourists every year. It is a symbol of love and devotion and remains one of the most popular landmarks of India.
  `,
    spots: [
      { title: 'Taj Mahal', imgSrc: tajMahal, alt: 'Agra', location: 'Agra', route: '' },
      { title: 'Red Fort', imgSrc: tajMahal, alt: 'Delhi', location: 'Delhi', route: '' },
      // other spots
    ]
  };

  console.log(dTajMahal);
  console.log(dTajMahal.spots);

  return (
    <>
      <DestHero 
        img={dTajMahal.imgSrc} 
        title={dTajMahal.title} 
        subTitle={dTajMahal.location} 
      />
      <About content={dTajMahal.about} />
      <Gallery images={dTajMahal.gallery} />
      {/* <ListDestinations
        list={dTajMahal.spots}
        title="Places Nearby" 
        subTitle="Exploring places nearby can often reveal hidden gems and unexpected adventures."
      /> */}
      <Stay hotels={dTajMahal.stays} />
    </>
  );
};

export default Destination;
