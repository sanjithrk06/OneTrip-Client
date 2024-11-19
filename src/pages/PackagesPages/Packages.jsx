import { GHero, PackageCard } from "../../components";
import { card1, card3, GOI, l1, l3, munnar, Mysuru, redFort } from "../../assets";

const Packages = () => {
  const packages = [
    {
    imgSrc: GOI,
    name: "Complete Package",
    from: "Tamil Nadu",
    to: "Kashmir",
    startDate: "2024-12-15",
    endDate: "2025-01-01",
    price: "Rs. 3000",
  },
  {
    imgSrc: l1, 
    name: "Luxury Escape",
    from: "Kerala",
    to: "Goa",
    startDate: "2024-11-20",
    endDate: "2024-12-05",
    price: "Rs. 4500",
  },
  {
    imgSrc: redFort, 
    name: "Mountain Retreat",
    from: "Himachal Pradesh",
    to: "Leh",
    startDate: "2024-12-01",
    endDate: "2024-12-20",
    price: "Rs. 5000",
  },
  {
    imgSrc: Mysuru, 
    name: "Desert Oasis",
    from: "Rajasthan",
    to: "Dubai",
    startDate: "2025-01-10",
    endDate: "2025-01-25",
    price: "Rs. 7000",
  },
  {
    imgSrc: l3,
    name: "Island Getaway",
    from: "Andaman",
    to: "Maldives",
    startDate: "2024-12-20",
    endDate: "2024-12-28",
    price: "Rs. 9500",
  },
  {
    imgSrc: card1,
    name: "City Adventure",
    from: "New York",
    to: "London",
    startDate: "2025-02-01",
    endDate: "2025-02-15",
    price: "Rs. 12000",
  },
]
  return (
    <>
      <GHero
        header={"Packages"}
        desc={"Exclusive Packages to Explore the Unseen"}
        img={card3}
      />

      {/* Map through the Package */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-10 px-48">
        {packages.map((hotel, index) => (
          <PackageCard key={index} hotel={hotel} />
        ))}
      </div>
      </>
  );
};

export default Packages;
