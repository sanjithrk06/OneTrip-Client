import React, { useState, useEffect } from "react";
import { HeroCard, KindsCard } from "../../components"; // Assuming you have a card component to display categories
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate to programmatically navigate
import { munnar } from "../../assets";

const KindsDestination = () => {
  const [categories, setCategories] = useState([]); // Store all categories
  const [loading, setLoading] = useState(true); // Loading state
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Fetch all categories when the component mounts
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://onetrip-server.onrender.com/api/category/",
          {
            withCredentials: true,
          }
        );
        if (response.data && response.data.data) {
          setCategories(response.data.data);
          console.log(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []); // Only run once when the component mounts

  if (loading) {
    return <p>Loading...</p>; // Show loading message until data is fetched
  }

  if (categories.length === 0) {
    return <p>No categories available.</p>; // If no categories exist
  }

  // Handle category click - navigate to the category-specific destinations page
  const handleCategoryClick = (categoryName) => {
    navigate(`/destinations/${categoryName}`); // Navigate to /destinations/:category
  };

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
            Kinds of Destinations
          </h2>
          <p className="text-gray-600">
            From historical cities to natural spectacles, come see the best of
            the world!
          </p>
        </div>

        <div className="m-2 my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 content-center">
          {categories.length > 0 ? (
            categories.map((category) => {
              // Check if the category has at least one destination
              if (category.destinations && category.destinations.length > 0) {
                const firstDestination = category.destinations[0]; // Get the first destination's image
                return (
                  <div
                    key={category._id}
                    className="cursor-pointer"
                    onClick={() =>
                      handleCategoryClick(category.name.toLowerCase())
                    } // Trigger navigate on click
                  >
                    <KindsCard
                      image={firstDestination ? firstDestination.image : ""} // Display first destination image
                      title={category.name}
                      route="#" // Temporary empty route
                    />
                    <p className="text-center">{category.description}</p>
                  </div>
                );
              }
              // If no destinations, skip rendering this category
              return null;
            })
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No categories available.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default KindsDestination;
