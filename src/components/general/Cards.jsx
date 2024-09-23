import { useNavigate } from 'react-router-dom';

const Cards = ({ image, imageAlt, title, location, route }) => {
  const navigate = useNavigate();

  // Handle card click to navigate to the desired route
  const handleCardClick = () => {
    navigate(route);  // `route` is passed as a prop to dynamically navigate
  };

  return (
    <>
    {/* <div
      className="bg-white shadow-2xl shadow-gray-600  rounded-3xl overflow-hidden w-full sm:w-72 relative cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="relative group">
        <img src={image} alt={destTitle} className="w-full h-48 object-cover transition-transform duration-1000 ease-in-out " />
        <div className="absolute inset-0 bg-gray-800 bg-opacity-60 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform -translate-y-40 duration-1000 flex justify-center items-center">
          <p className="text-white text-lg font-semibold">{location}</p>
        </div>
      </div>
      <div className="p-4 flex justify-between items-center">
        <h3 className="text-lg font-bold text-gray-800">{destTitle}</h3>
        <div className="flex items-center space-x-1">
          <span className="h-2 w-2 rounded-full bg-orange-500 inline-block"></span>
          <p className="text-sm text-gray-600">{location}</p>
        </div>
      </div>
    </div> */}
    <div className="rounded-xl pb-6 px-2 pt-2 cursor-pointer shadow-[0px_8px_24px_rgba(149,157,165,0.2)] bg-white" onClick={handleCardClick}>
  <div className="overflow-hidden rounded-lg">
    <img
      className="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-xl h-48 object-cover"
      src={image}
      alt={imageAlt}
    />
  </div>

  <div className="border-t-4 border-orange-500 mt-4 mx-2 rounded-full w-12"></div>

  <div className="pt-4 px-3 flex items-center justify-between space-x-4">
    <h3 className="text-base font-bold text-black cursor-pointer duration-300 transition hover:text-[#FA5252]">
      {title}
    </h3>
    <p className="font-medium text-gray-500 cursor-pointer text-sm duration-300 transition hover:text-[#FA5252'] relative before:content-[''] before:inline-block before:bg-orange-500 before:rounded-full before:w-1 before:h-1 before:mr-2 before:mb-1">
      {location ? location : 'One Trip'}
    </p>
  </div>
</div>

  </>
  );
};

export default Cards;
