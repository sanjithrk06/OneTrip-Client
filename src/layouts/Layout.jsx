import React from 'react';
import { Outlet } from 'react-router-dom';

//Components import
import { Header } from '../components';

const Layout = () => {
  return (
    <>
    <Header />
    <Outlet />
    </>
  )
}

export default Layout;