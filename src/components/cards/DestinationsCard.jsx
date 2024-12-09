import { useNavigate } from "react-router-dom";

const DestinationsCard = ({ image, title, location, route }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(route);
  };

  return (
    <>
      <div
        className="rounded-xl pb-6 px-2 pt-2 cursor-pointer shadow-[0px_8px_24px_rgba(149,157,165,0.2)] bg-white"
        onClick={handleCardClick}
      >
        <div className="overflow-hidden rounded-lg">
          <img
            className="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-xl h-48 object-cover"
            src={image}
            alt={title}
          />
        </div>

        <div className="border-t-4 border-orange-500 mt-4 mx-2 rounded-full w-12"></div>

        <div className="pt-4 px-3 flex items-center justify-between space-x-4">
          <h3 className="text-base font-bold text-black cursor-pointer duration-300 transition hover:text-[#FA5252]">
            {title}
          </h3>
          <p className="font-medium text-gray-500 cursor-pointer text-sm duration-300 transition hover:text-[#FA5252'] relative before:content-[''] before:inline-block before:bg-orange-500 before:rounded-full before:w-1 before:h-1 before:mr-2 before:mb-1">
            One Trip
          </p>
        </div>
      </div>
    </>
  );
};

export default DestinationsCard;
