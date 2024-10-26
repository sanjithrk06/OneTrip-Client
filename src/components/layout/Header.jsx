// React Hooks
import { useState, useEffect } from "react";

// Router Components
import { Link } from "react-router-dom";

// Lucide Icons
import { Menu, X } from "lucide-react";

// Nav Links List
import { navItems } from "../../constants/constant";
import { useAuthStore } from "../../store/authStore";

const Header = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { user, logout, isAuthenticated } = useAuthStore();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 py-3  ${
        isScrolled ? "bg-gray-200/50 backdrop-blur-3xl" : ""
      } transition-all duration-300`}
    >
      <div className="container py-1 px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center px-6">
          <div className="flex items-center flex-shrink-0">
            {/* <img className="h-10 w-10 mr-2" src={logo} alt="Logo" /> */}
            <span
              className={`text-2xl font-bold tracking-tight ${
                isScrolled ? `text-primary` : ``
              }`}
            >
              One Trip
            </span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li
                key={index}
                className={` font-normal ${isScrolled ? `text-primary` : ``}`}
              >
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-4 items-center">
            {isAuthenticated ? (
              <>
                <h4>Welcome, {user.name}</h4>
                <Link
                  onClick={handleLogout}
                  className={`py-2 px-3 border border-primary/45 hover:border-primary hover:bg-hover/35 rounded-full ${
                    isScrolled ? `text-primary` : ``
                  }`}
                >
                  Logout
                </Link>
              </>
            ) : (
              <>
                <Link
                  to={"auth/login"}
                  className={`py-2 px-3 border border-primary/45 hover:border-primary hover:bg-hover/35 rounded-full ${
                    isScrolled ? `text-primary` : ``
                  }`}
                >
                  Login In
                </Link>
                <Link
                  to={"auth/signup"}
                  className="bg-primary/45 hover:bg-hover py-2 px-3 rounded-full"
                >
                  Register
                </Link>
              </>
            )}
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-gray-900/70 backdrop-blur-lg w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <Link to={"auth/login"} className="py-2 px-3 border rounded-md">
                Login In
              </Link>
              <Link
                to={"auth/signup"}
                className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
              >
                Create an account
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
