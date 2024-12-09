import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { GiSandsOfTime, GiPathDistance } from "react-icons/gi";
import { IoFastFoodOutline } from "react-icons/io5";

const PackageCard = ({ hotel }) => {
  return (
    <div className="bg-white p-2 shadow-lg rounded-2xl overflow-hidden hover:-translate-y-4 duration-300">
      <img className="w-full rounded-xl h-40 object-cover" src={hotel.imgSrc} alt={hotel.name} />
      <div className="pt-4 px-2">
        <div className="flex justify-between  items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-800">{hotel.name}</h3>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 font-normal gap-4 mb-4 text-black text-sm">

          <div className="flex items-center">
            <p className=" text-base font-normal text-orange-500">From:</p>
            <p className="text-base text-black font-normal">{hotel.from}</p>
          </div>
          
          <div className="flex items-center">
            <p className=" text-base font-normal text-orange-500">To:</p>
            <p className="text-base text-black font-normal">{hotel.to}</p>
          </div>
          
          <div className="flex items-center">
            <p className=" text-base font-normal text-orange-500">Start:</p>
            <p className="text-base text-black font-normal">{hotel.startDate}</p>
          </div>
          
          <div className="flex items-center">
            <p className=" text-base font-normal text-orange-500">End:</p>
            <p className="text-base text-black font-normal">{hotel.endDate}</p>
          </div>
          
        </div>

        {/* Location and Distance */}
        <div className="flex flex-row gap-4 mb-4 text-black text-sm">
          <button className="bg-orange-500 text-white px-4 py-2 rounded-full w-full flex items-center justify-center">
            {hotel.price} 
          </button>
        </div>

      </div>
    </div>
  );
};

export default PackageCard;
