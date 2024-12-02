import { Link } from "react-router-dom";
import Cards from "../general/Cards";
import "aos/dist/aos.css";

const ListCards = ({ lists, title, subTitle, category }) => {
  return (
    <div className="mx-2 px-6 md:px-28 py-20 bg-white">
      <div className="text-left">
        <h2 className="text-3xl font-bold text-black">{title}</h2>
        {subTitle && <p className="text-gray-600">{subTitle}</p>}
      </div>

      <div className="m-2 my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 content-center">
        {Array.isArray(lists) && lists.length > 0 ? (
          lists.map(({ id, title, imgSrc, alt, route }, index) => (
            <Link key={id || index} to={`/destinations/${category}${route}`}>
              <Cards
                image={imgSrc}
                imageAlt={alt || `Image ${index + 1}`}
                title={title}
              />
            </Link>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No destinations available.
          </p>
        )}
      </div>
    </div>
  );
};

export default ListCards;
