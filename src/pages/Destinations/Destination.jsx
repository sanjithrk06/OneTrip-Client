import { About, DestHero, Gallery, KindOfDestination, Stay } from "../../components"
import { Baga, Charminar, GOI, h1, h2, h3, Ladak, munnar, Mysuru, redFort, taj1, taj2, taj3, taj4, taj5, tajMahal } from "../../assets"

const Destination = () => {
  const hotels = [
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
      imgSrc: h2
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
      imgSrc: h3
    }
  ];


  const tajMahalImages = [
    taj2, taj3, taj4, taj5
  ];

  const paragraphContent = `The Taj Mahal is a white marble mausoleum located in Agra, India. It was built by the Mughal emperor Shah Jahan in memory of his beloved wife, Mumtaz Mahal, who died in 1631. Construction of the Taj Mahal began in 1632 and was completed in 1653.

The Taj Mahal is considered one of the most beautiful buildings in the world and is a UNESCO World Heritage Site. It is renowned for its stunning architecture and intricate carvings, which are made from a variety of precious and semi-precious stones such as lapis lazuli, turquoise, and malachite.

The main building of the Taj Mahal is surrounded by a large garden, reflecting pools, and other structures such as a mosque and a guest house. The main entrance to the complex is through a gateway made of red sandstone, which is decorated with calligraphy and geometric patterns.

The interior of the Taj Mahal is equally stunning, with intricate carvings and inlaid designs covering the walls and ceilings. The centerpiece of the mausoleum is the tomb of Mumtaz Mahal, which is made of white marble and decorated with intricate carvings and calligraphy.

The Taj Mahal is considered a masterpiece of Mughal architecture and is visited by millions of tourists every year. It is a symbol of love and devotion and remains one of the most popular landmarks of India.
  `;

  const destinations =[
    { title: 'Taj Mahal', imgSrc: tajMahal, alt: 'Agra', location: 'Agra', route: '/test/famous/taj-mahal' },
    { title: 'Red Fort', imgSrc: redFort, alt: 'Delhi', location: 'Delhi', route: '/test/famous/taj-mahal' },
    { title: 'Gateway Of India', imgSrc: GOI, alt: 'Maharashtra', location: 'Maharashtra', route: '/test/famous/taj-mahal' },
    { title: 'Ladakh', imgSrc: Ladak, alt: 'Kashmir', location: 'Kashmir', route: '/test/famous/taj-mahal' },
    { title: 'Charminar', imgSrc: Charminar, alt: 'Telungana', location: 'Telangana', route: '/test/famous/taj-mahal' },
    { title: 'Baga Beach', imgSrc: Baga, alt: 'Goa', location: 'Goa', route: '/test/famous/taj-mahal' },
    { title: 'Munnar', imgSrc: munnar, alt: 'Kerala', location: 'Kerala', route: '/test/famous/taj-mahal' },
    { title: 'Mysuru Palace', imgSrc: Mysuru, alt: 'Karnataka', location: 'Karnataka', route: '/test/famous/taj-mahal' },
  ];

  return (
    <>
      <DestHero img={taj1} title={"TAJ MAHAL"} subTitle={"The beauty and grandeur of the Taj Mahal continue to mesmerize visitors from around the world, leaving them in awe and wonder!"}/>
      <About content={paragraphContent} />
      <Gallery images={tajMahalImages}/>
      <KindOfDestination destinations={destinations} title={"Places Nearby"} subTitle={"Exploring places nearby can often reveal hidden gems and unexpected adventure."}/>
      <Stay hotels={hotels}/>
    </>
  )
}

export default Destination;
