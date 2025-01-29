import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import { About, DestHero, Gallery, ListCards, Stay } from "../../components";

const DestinationPage = () => {
  const { category, destinationName } = useParams();
  const name = destinationName;
  const [destination, setDestination] = useState(null);

  useEffect(() => {
    const fetchDestination = async () => {
      try {
        console.log(name);
        const response = await axios.post(
          "https://onetrip-server.onrender.com/api/destinationPage/single-page",
          { name },
          {
            withCredentials: true,
          }
        );
        let { data } = response;

        if (data && data.data) {
          data = data.data;
        } else {
          console.error("No data received from the API");
        }
        setDestination(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching destination:", error);
      }
    };

    fetchDestination();
  }, [name]);

  if (!destination) return <p>Loading...</p>;

  return (
    <div className=" text-black">
      <DestHero
        img={destination.image}
        title={destination.title}
        subTitle={destination.subTitle}
      />
      <About content={destination.about} />
      <Gallery images={destination.gallery} />
      <ListCards
        lists={destination.spots}
        title="Places Nearby"
        subTitle="Explore nearby attractions"
      />
      <Stay hotels={destination.stays} />
    </div>
  );
};

export default DestinationPage;
