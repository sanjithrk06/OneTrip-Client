import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Clock8,
  Footprints,
  Mail,
  MapPinIcon,
  Phone,
  Speech,
  Users,
} from "lucide-react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Package = () => {
  const [packageData, setPackageData] = useState(null);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const { packageId } = useParams();

  // Fetch package data from API
  useEffect(() => {
    const fetchPackageData = async () => {
      try {
        const response = await axios.get(
          `https://onetrip-server.onrender.com/api/package/${packageId}`,
          {
            withCredentials: true,
          }
        );
        setPackageData(response.data);
      } catch (error) {
        console.error("Error fetching package data:", error);
      }
    };
    fetchPackageData();
  }, [packageId]);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  if (!packageData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mx-2 px-6 md:px-28 py-28 bg-white flex flex-col md:flex-row gap-5 justify-between">
      {/* Left Section */}
      <div className="w-full md:w-[75vw]">
        {/* Header */}
        <div className="text-left">
          <h2 className="text-2xl font-semibold text-slate-800">
            {packageData.name}
          </h2>
          <div className="pt-2 flex items-center space-x-2">
            <MapPinIcon className="text-orange-500/80" size={20} />
            <p className="text-sm font-normal text-gray-600">
              {packageData.location.join(", ")}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-400/70 my-6 rounded-full w-full"></div>

        {/* Details Section */}
        <div className="flex flex-wrap md:flex-row justify-between gap-5 px-2 font-normal text-gray-700">
          <div className="flex flex-row gap-3 items-center">
            <Clock8 strokeWidth={0.5} size={40} color="#5b97f8" />
            <div className="flex flex-col text-sm">
              <h3>Durations</h3>
              <p className="text-primary">
                {packageData.duration.days} Days, {packageData.duration.nights}{" "}
                Nights
              </p>
            </div>
          </div>

          <div className="flex flex-row gap-3 items-center">
            <Footprints strokeWidth={0.5} size={40} color="#5b97f8" />
            <div className="flex flex-col text-sm">
              <h3>Tour Type</h3>
              <p className="text-primary">{packageData.tourType}</p>
            </div>
          </div>

          <div className="flex flex-row gap-3 items-center">
            <Users strokeWidth={0.5} size={40} color="#5b97f8" />
            <div className="flex flex-col text-sm">
              <h3>Group Size</h3>
              <p className="text-primary">{packageData.groupSize}</p>
            </div>
          </div>

          <div className="flex flex-row gap-3 items-center">
            <Speech strokeWidth={0.5} size={40} color="#5b97f8" />
            <div className="flex flex-col text-sm">
              <h3>Languages</h3>
              <p className="text-primary">{packageData.languages.join(", ")}</p>
            </div>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="mt-6">
          <Carousel showArrows autoPlay infiniteLoop>
            {packageData.image.map((img, index) => (
              <div key={index}>
                <img src={img} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </Carousel>
        </div>

        {/* Description Section */}
        <div className="text-black">
          <h1 className="text-lg font-semibold py-2">Description</h1>
          <p className="text-sm">{packageData.description}</p>
        </div>

        {/* Accordion Section */}
        <div className="w-full py-3">
          {packageData.agenda.map((item, index) => (
            <div key={item._id} className="border-b border-gray-200">
              <button
                onClick={() => toggleAccordion(index)}
                className="flex items-center justify-between w-full py-4 font-medium text-gray-800 hover:text-gray-900 focus:outline-none"
              >
                <span>{item.title}</span>
                <svg
                  className={`w-5 h-5 transform ${
                    activeAccordion === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              <div
                style={{
                  maxHeight: activeAccordion === index ? "200px" : "0",
                  transition: "max-height 0.3s ease",
                }}
                className="overflow-hidden"
              >
                <p className="p-4 text-gray-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-[25vw] right-section">
        <div className="bg-gray-200 m-2 p-4 md:mt-12 text-slate-800 text-center">
          <h1 className="font-medium text-lg">Stay connected</h1>
          <div className="flex flex-col justify-center pt-6 p-2">
            <div className="flex flex-row gap-2 justify-center">
              <Phone size={16} />
              <p className="text-xs">9876543210</p>
            </div>

            <div className="border-t border-slate-400/90 my-2 mx-auto rounded-full w-16"></div>

            <div className="flex flex-row gap-2 justify-center">
              <Mail size={16} />
              <p className="text-xs">onetrip@gmail.com</p>
            </div>
          </div>

          <Link
            to={`/package/booking/${packageId}`}
            className=" flex flex-row bg-primary/90 hover:bg-primary text-whiteDim justify-center w-full px-4 py-1 mt-4 gap-1"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Package;
