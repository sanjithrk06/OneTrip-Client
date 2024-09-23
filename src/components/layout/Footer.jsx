// Router Components
import { Link } from 'react-router-dom';

// Footer Links List
import { footerInformation } from '../../constants/constant';

// Icons
import { ImFacebook } from 'react-icons/im';
import { BsTwitter, BsInstagram } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className="bg-bgColor py-8">
      <div className="container mx-auto grid gap-6 text-center md:grid-cols-2 lg:grid-cols-4">
        <div className="pb-2">
          <div className="flex justify-center items-center">
            <a href="#" className="flex text-2xl items-center text-whiteDim font-bold cursor-pointer">
              <h1>One Trip</h1>
            </a>
          </div>
          <div className="flex justify-center gap-2 mt-4">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="#"
              className=" rounded-md p-2 text-2xl hover:bg-hover/40 transition"
            >
              <BsInstagram />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="#"
              className=" rounded-md p-2 text-2xl hover:bg-hover/40 transition"
            >
              <ImFacebook />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="#"
              className=" rounded-md p-2 text-2xl hover:bg-hover/40 transition"
            >
              <BsTwitter />
            </a>
          </div>
        </div>

        <div className="text-center">
          <span className="font-bold text-whiteDim mb-2 block">Information</span>
          <ul className="space-y-1">
            {footerInformation.map((item, index) => (
              <li key={index} className="hover:translate-x-2 transition">
                <Link to={item.to} className="text-whiteDim/80 text-sm font-medium hover:text-PrimaryColor">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center">
          <span className="font-bold text-whiteDim mb-2 block">About Travel</span>
          <p className="text-whiteDim/80 text-sm">
            "Smart travel made easy. Personalized, sustainable, and unforgettable experiences await."
          </p>
        </div>

        <div className="text-center">
          <span className="font-bold text-whiteDim mb-2 block">Contact Us</span>
          <a href="#" className="text-whiteDim/80 text-sm font-medium mb-1 block">
            onetripqueries@gmail.com
          </a>
          <a href="#" className="text-whiteDim/80 text-sm font-medium mb-1 block">
            9876543216
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
