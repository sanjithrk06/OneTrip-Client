import React from 'react';
import { Outlet } from 'react-router-dom';

//Components import
import { Navbar, Footer } from '../components';

const Layout = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout;