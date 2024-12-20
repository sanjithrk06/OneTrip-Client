import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate for programmatic navigation
import { useState, useEffect } from "react"; // Import hooks for state and effect
import axios from "axios"; // Import axios to make API requests

import { munnar } from "../../assets";
import { DestinationsCard, HeroCard } from "../../components";

const Destinations = () => {
  const { category } = useParams(); // Get the category from the URL
  const [categoryData, setCategoryData] = useState(null); // Store category data
  const [loading, setLoading] = useState(true); // Loading state
  const navigate = useNavigate(); // useNavigate hook for navigation

  // Fetch the data for the specific category from the backend
  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/api/category/${category}`);
        
        // Set the category data once fetched
        if (response.data && response.data.data) {
          setCategoryData(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching category data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryData();
  }, [category]); // Only run the effect when category changes

  // Show loading state while fetching
  if (loading) {
    return <p>Loading...</p>;
  }

  // Handle the case when no data is found for the category
  if (!categoryData) {
    return (
      <div className="mx-2 px-6 md:px-28 py-20 bg-white">
        <p className="col-span-full text-center text-gray-500">No data found for this category.</p>
      </div>
    );
  }

  // Render the destinations once data is fetched
  return (
    <>
      <HeroCard header={categoryData.name} desc={categoryData.description} img={munnar} />
      
      <div className="mx-2 px-6 md:px-28 py-20 bg-white">
        <div className="text-left">
          <h2 className="text-3xl font-bold text-black">{categoryData.name}</h2>
          {categoryData.description && (
            <p className="text-gray-600">{categoryData.description}</p>
          )}
        </div>

        <div className="m-2 my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 content-center">
          {categoryData.destinations && categoryData.destinations.length > 0 ? (
            categoryData.destinations.map((destination, index) => (
              <DestinationsCard
                key={index}
                image={destination.image}
                title={destination.title}
                route={`/destinations/${category}/${destination.name}`}
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
