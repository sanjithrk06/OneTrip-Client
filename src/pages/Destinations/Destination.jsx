import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import { About, DestHero, Gallery, ListCards, Stay } from "../../components";

const DestinationPage = () => {
  const { destinationName } = useParams();
  const name = destinationName; // Get destination name from the URL params
  const [destination, setDestination] = useState(null);

  useEffect(() => {
    const fetchDestination = async () => {
      const cachedDestination = "";
      if (cachedDestination) {
        setDestination(JSON.parse(cachedDestination));
        console.log("Using cached data for", name);
      } else {
        try {
          console.log("NO - cache");
          const response = await axios.post(
            "http://localhost:5001/api/destinationPage/single-page",
            { name }
          );

          // Axios automatically parses the response, so no need for response.json()
          const { data } = response;

          if (data && data.data) {
            setDestination(data.data);
            Cookies.set(name, JSON.stringify(data.data), { expires: 1 });
            localStorage.setItem(name, JSON.stringify(data.data));
            console.log("Fetched from API and cached data for", name);
          } else {
            console.error("No data received from the API");
          }
        } catch (error) {
          console.error("Error fetching destination:", error);
        }
      }
    };

    fetchDestination();
  }, [name]);

  if (!destination) return <p>Loading...</p>;

  return (
    <>
      <DestHero
        img={destination.imgSrc}
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
    </>
  );
};

export default DestinationPage;
