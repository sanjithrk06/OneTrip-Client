// React router component
import { Outlet } from "react-router-dom";

// Layout Components import
import { Footer, Header } from "../components";

const HomeLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default HomeLayout;
