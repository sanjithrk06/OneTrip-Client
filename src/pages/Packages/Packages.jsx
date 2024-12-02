import React, { useState, useEffect } from "react";
import { HeroCard, PackageCard, PackagesCard } from "../../components";
import {
  card3, // Correct imports
} from "../../assets";
import axios from "axios";
import Cookies from "js-cookie"; // Ensure this is installed via npm/yarn

const Packages = () => {
  // Define state for packages and errors
  const [packages, setPackages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPackages = async () => {
      const cachedPackages = Cookies.get("packages");

      if (cachedPackages) {
        setPackages(JSON.parse(cachedPackages));
        console.log("Using cached data");
      } else {
        try {
          console.log("Fetching data from API...");
          const response = await axios.get(
            "http://localhost:5001/api/package/"
          );

          const data = response.data;
          console.log("Packages:", data);

          if (data && Array.isArray(data)) {
            setPackages(data);
            Cookies.set("packages", JSON.stringify(data), { expires: 1 });
          } else {
            setError("No valid data received from the API");
          }
        } catch (err) {
          setError("Failed to load packages. Please try again later.");
        }
      }
    };

    fetchPackages();
  }, []);

  return (
    <>
      {/* Hero Card */}
      <HeroCard
        header="Packages"
        desc="Exclusive Packages to Explore the Unseen"
        img={card3}
      />

      {/* Render Packages or Error */}
      <div className="mx-2 px-6 md:px-28 py-2 m-2 my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 content-center">
        {error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : (
          packages.map((pkg, index) => (
            <PackagesCard
              key={index}
              image={pkg.image}
              title={pkg.name}
              location={pkg.location}
              type={pkg.tourType}
              language={pkg.languages}
            />
          ))
        )}
      </div>
    </>
  );
};

export default Packages;
