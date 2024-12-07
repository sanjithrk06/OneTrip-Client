// Components import
import { HeroCard, KindsCard } from "../../components";

// Constant Data import
import { KindsOfDestDetails } from "../../constants/constant";

// Bannar Image import
import { munnar } from "../../assets";

const KindsDestination = () => {
  return (
    <>
      <HeroCard
        header={"Destinations"}
        desc={"test description"}
        img={munnar}
      />
      <div className="mx-2 px-6 md:px-28 py-20 bg-white">
        <div className="text-left">
          <h2 className="text-3xl font-bold text-black">
            {KindsOfDestDetails.title}
          </h2>
          {KindsOfDestDetails.subTitle && (
            <p className="text-gray-600">{KindsOfDestDetails.subTitle}</p>
          )}
        </div>

        <div className="m-2 my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 content-center">
          {KindsOfDestDetails.destinations.length > 0 ? (
            KindsOfDestDetails.destinations.map(
              ({ title, imgSrc, route }, index) => (
                <KindsCard
                  key={index}
                  image={imgSrc}
                  title={title}
                  route={route}
                />
              )
            )
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

export default KindsDestination;
