import { HeroCard } from "../components";
import { munnar } from "../assets";
import { useState } from "react";

const HiddenSpot = () => {
  const { name, setName } = useState("");
  const { location, setLocation } = useState("");
  const { review, setReview } = useState("");

  return (
    <>
      <HeroCard
        header={"Suggest Hidden Spot"}
        desc={"Discover the Undiscovered"}
        img={munnar}
      />

      <div className="flex flex-col max-w-screen-md my-10 justify-center align-middle mx-auto overflow-hidden rounded-lg bg-white shadow-sm">
        <div className="grow p-4 md:px-8 md:py-6">
          <form className="space-y-4">
            <h1 className="mb-4 text-center text-2xl text-primary font-bold">
              Suggest Hidden Spots
            </h1>
            <div className="space-y-1">
              <label
                htmlFor="name"
                className="text-sm text-slate-800 font-semibold"
              >
                Place Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Place Name"
                className={`block w-full bg-white rounded-lg outline-none border px-4 py-2 leading-6 text-slate-700 placeholder-gray-400 focus:ring-2 focus:ring-primary/50 border-gray-200 focus:border-primary`}
              />
            </div>
            <div className="space-y-1">
              <label
                htmlFor="location"
                className="text-sm text-slate-800 font-semibold"
              >
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter Place Location"
                className={`block w-full bg-white rounded-lg outline-none border px-4 py-2 leading-6 text-slate-700 placeholder-gray-400 focus:ring-2 focus:ring-primary/50 border-gray-200 focus:border-primary`}
              />
            </div>
            <div className="space-y-1">
              <label
                htmlFor="review"
                className="text-sm text-slate-800 font-semibold"
              >
                Review
              </label>
              <textarea
                id="review"
                name="review"
                value={review}
                onChange={(e) => setReview(e.target.value)}
                placeholder="Enter Place Review"
                className={`block w-full bg-white rounded-lg outline-none border px-4 py-2 leading-6 text-slate-700 placeholder-gray-400 focus:ring-2 focus:ring-primary/50 border-gray-200 focus:border-primary`}
              />
            </div>

            <div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-primary bg-primary/90 px-5 py-2 font-semibold leading-6 text-md text-white hover:border-primary hover:bg-primary hover:text-white focus:ring focus:ring-rose-400/50 active:border-primary active:bg-primary"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default HiddenSpot;
