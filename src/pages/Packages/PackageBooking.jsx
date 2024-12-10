import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
import { MapPinIcon } from "lucide-react";

const PackageBooking = () => {
  const { packageId } = useParams();
  const [pkg, setPkg] = useState([]);
  const [error, setError] = useState(null);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const fetchPackage = async () => {
      const cachedPackage = Cookies.get("package");

      if (cachedPackage) {
        setPkg(JSON.parse(cachedPackage));
        console.log("Using cached data");
      } else {
        try {
          console.log("Fetching data from API...");
          const response = await axios.get(
            `http://localhost:5001/api/package/${packageId}`
          );

          const data = response.data;
          console.log("Package:", data);

          if (data) {
            setPkg(data);
            Cookies.set("package", JSON.stringify(data), { expires: 1 });
          } else {
            setError("No valid data received from the API");
          }
        } catch (err) {
          setError("Failed to load packages. Please try again later.");
        }
      }
    };

    fetchPackage();
  }, [packageId]);

  // Calculate total price when adults or children change
  useEffect(() => {
    if (pkg.price) {
      const adultPrice = adults * pkg.price;
      const childPrice = children * (pkg.price / 2);
      setTotalPrice(adultPrice + childPrice);
    }
  }, [adults, children, pkg.price]);

  const handleAdultsChange = (e) => {
    const numAdults = parseInt(e.target.value) || 0;
    setAdults(numAdults);
  };

  const handleChildrenChange = (e) => {
    const numChildren = parseInt(e.target.value) || 0;
    setChildren(numChildren);
  };

  return (
    <div className="bg-whiteDim text-slate-900">
      <div
        id="page-container"
        className="mx-auto flex min-h-dvh w-full min-w-[320px] flex-col bg-primary/10"
      >
        <main id="page-content" className="flex max-w-full flex-auto flex-col">
          <div className="relative mx-auto flex min-h-dvh w-full max-w-10xl items-center justify-center overflow-hidden p-4 lg:p-8">
            <section className="w-full max-w-5xl py-2">
              <header className="mb-6 text-center">
                <h1 className="mb-1 inline-flex items-center gap-1 text-lg font-bold">
                  <svg
                    className="hi-mini hi-cube-transparent inline-block size-4 text-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.638 1.093a.75.75 0 01.724 0l2 1.104a.75.75 0 11-.724 1.313L10 2.607l-1.638.903a.75.75 0 11-.724-1.313l2-1.104zM5.403 4.287a.75.75 0 01-.295 1.019l-.805.444.805.444a.75.75 0 01-.724 1.314L3.5 7.02v.73a.75.75 0 01-1.5 0v-2a.75.75 0 01.388-.657l1.996-1.1a.75.75 0 011.019.294zm9.194 0a.75.75 0 011.02-.295l1.995 1.101A.75.75 0 0118 5.75v2a.75.75 0 01-1.5 0v-.73l-.884.488a.75.75 0 11-.724-1.314l.806-.444-.806-.444a.75.75 0 01-.295-1.02zM7.343 8.284a.75.75 0 011.02-.294L10 8.893l1.638-.903a.75.75 0 11.724 1.313l-1.612.89v1.557a.75.75 0 01-1.5 0v-1.557l-1.612-.89a.75.75 0 01-.295-1.019zM2.75 11.5a.75.75 0 01.75.75v1.557l1.608.887a.75.75 0 01-.724 1.314l-1.996-1.101A.75.75 0 012 14.25v-2a.75.75 0 01.75-.75zm14.5 0a.75.75 0 01.75.75v2a.75.75 0 01-.388.657l-1.996 1.1a.75.75 0 11-.724-1.313l1.608-.887V12.25a.75.75 0 01.75-.75zm-7.25 4a.75.75 0 01.75.75v.73l.888-.49a.75.75 0 01.724 1.313l-2 1.104a.75.75 0 01-.724 0l-2-1.104a.75.75 0 11.724-1.313l.888.49v-.73a.75.75 0 01.75-.75z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>One Trip</span>
                </h1>
                <h2 className=" text-xs font-medium text-slate-600">
                  Book now to start exploring
                </h2>
              </header>

              <div className="w-full bg-white rounded-lg shadow-lg p-6 flex flex-col lg:flex-row gap-8">
                {/* Package Details Section */}
                <div className="w-full lg:w-1/2">
                  <h1 className="text-xl font-bold">
                    {pkg.name || "Loading..."}
                  </h1>
                  <div className="flex items-center space-x-2 mt-2">
                    <MapPinIcon className="text-orange-500/80" size={20} />
                    <p className="text-sm font-normal text-gray-600">
                      {pkg.location?.join(", ") || "Location not available"}
                    </p>
                  </div>
                  <div className="aspect-w-16 aspect-h-9 mt-4">
                    <img
                      src={pkg.image}
                      alt="Package"
                      className="rounded-md w-full h-[60vh] object-cover"
                    />
                  </div>
                </div>

                {/* Booking Form Section */}
                <div className="w-full lg:w-1/2">
                  <h1 className="text-2xl text-center text-primary font-bold mb-4">
                    Book Now
                  </h1>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      {/* Name */}
                      <div>
                        <label
                          htmlFor="name"
                          className="text-sm text-slate-800 font-semibold"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Enter your name"
                          className="block w-full outline-none bg-white rounded-lg border px-4 py-2 text-slate-700 placeholder-gray-400 focus:ring-2 focus:ring-primary border-gray-200"
                        />
                      </div>
                      {/* Phone Number */}
                      <div>
                        <label
                          htmlFor="phone"
                          className="text-sm text-slate-800 font-semibold"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          placeholder="Enter your phone number"
                          className="block w-full outline-none bg-white rounded-lg border px-4 py-2 text-slate-700 placeholder-gray-400 focus:ring-2 focus:ring-primary border-gray-200"
                        />
                      </div>
                    </div>
                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="text-sm text-slate-800 font-semibold"
                      >
                        Email ID
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        className="block w-full outline-none bg-white rounded-lg border px-4 py-2 text-slate-700 placeholder-gray-400 focus:ring-2 focus:ring-primary border-gray-200"
                      />
                    </div>
                    {/* Destination & Departure Date */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="destination"
                          className="text-sm text-slate-800 font-semibold"
                        >
                          Destination
                        </label>
                        <input
                          type="text"
                          id="destination"
                          name="destination"
                          placeholder="Enter destination"
                          className="block w-full outline-none bg-white rounded-lg border px-4 py-2 text-slate-700 placeholder-gray-400 focus:ring-2 focus:ring-primary border-gray-200"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="departure-date"
                          className="text-sm text-slate-800 font-semibold"
                        >
                          Departure Date
                        </label>
                        <input
                          type="date"
                          id="departure-date"
                          name="departure-date"
                          className="block w-full outline-none bg-white rounded-lg border px-4 py-2 text-slate-700 focus:ring-2 focus:ring-primary border-gray-200"
                        />
                      </div>
                    </div>
                    {/* Adults & Children */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="adults"
                          className="text-sm text-slate-800 font-semibold"
                        >
                          No. of Adults
                        </label>
                        <input
                          type="number"
                          id="adults"
                          name="adults"
                          placeholder="Enter no. of adults"
                          min="1"
                          value={adults}
                          onChange={handleAdultsChange}
                          className="block w-full outline-none bg-white rounded-lg border px-4 py-2 text-slate-700 placeholder-gray-400 focus:ring-2 focus:ring-primary border-gray-200"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="children"
                          className="text-sm text-slate-800 font-semibold"
                        >
                          No. of Children
                        </label>
                        <input
                          type="number"
                          id="children"
                          name="children"
                          placeholder="Enter no. of children"
                          min="0"
                          value={children}
                          onChange={handleChildrenChange}
                          className="block w-full outline-none bg-white rounded-lg border px-4 py-2 text-slate-700 placeholder-gray-400 focus:ring-2 focus:ring-primary border-gray-200"
                        />
                      </div>
                    </div>
                    {/* Price */}
                    <div>
                      <label
                        htmlFor="price"
                        className="text-sm text-slate-800 font-semibold"
                      >
                        Total Price
                      </label>
                      <p
                        id="price"
                        name="price"
                        className="block w-full outline-none rounded-lg px-4 py-2 font-bold text-lg"
                      >
                        ₹ {totalPrice.toLocaleString() || "Price not available"}
                      </p>
                      <div className="text-sm text-gray-600 mt-1">
                        <p>
                          Adults: {adults} x ₹{pkg.price}
                        </p>
                        <p>
                          Children: {children} x ₹
                          {pkg.price ? (pkg.price / 2).toFixed(2) : 0}
                        </p>
                      </div>
                    </div>
                    {/* Proceed to Pay */}
                    <button
                      type="button"
                      className="w-full bg-primary text-white py-2 px-4 rounded-lg text-lg font-semibold hover:bg-primary/80"
                    >
                      Proceed to Pay
                    </button>
                  </form>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PackageBooking;
