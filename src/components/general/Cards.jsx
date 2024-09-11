
const Cards = (image, destTitle, location) => {
  return (
  <div className="bg-white shadow-2xl shadow-gray-600  rounded-3xl overflow-hidden w-full sm:w-72 relative">
    <div className="relative group">
      <img src={image} alt={destTitle} className="w-full h-48 object-cover transition-transform duration-1000 ease-in-out " />
      {/* Overlay that appears on hover */}
      {/* <div className="absolute inset-0 bg-gray-800 bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 flex justify-center items-center"> */}
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
  </div>
    
)}


export default Cards
