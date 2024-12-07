import { useParams } from "react-router-dom";

import { munnar } from "../../assets";
import { destinations } from "../../constants/constant";

import { DestinationsCard, HeroCard } from "../../components";

const Destinations = () => {
  const { category } = useParams();
  const destData = destinations[category];

  if (!destData) {
    return (
      <>
        <div className="mx-2 px-6 md:px-28 py-20 bg-white">
          <div className="m-2 my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 content-center">
            <p className="col-span-full text-center text-gray-500">
              No destinations available.
            </p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <HeroCard header={destData.title} desc={destData.subTitle} img={munnar} />
      <div className="mx-2 px-6 md:px-28 py-20 bg-white">
        <div className="text-left">
          <h2 className="text-3xl font-bold text-black">{destData.title}</h2>
          {destData.subTitle && (
            <p className="text-gray-600">{destData.subTitle}</p>
          )}
        </div>

        <div className="m-2 my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 content-center">
          {Array.isArray(destData.destinations) &&
          destData.destinations.length > 0 ? (
            destData.destinations.map(({ title, imgSrc, route }, index) => (
              <DestinationsCard
                key={index}
                image={imgSrc}
                title={title}
                route={route}
              />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No destinations available.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Destinations;
