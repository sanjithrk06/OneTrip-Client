import React from 'react'
import { Outlet } from 'react-router-dom'

import { Header } from '../components';

const HomeLayout = () => {
  return (
    <>
    <Header />
    <Outlet />
    <div>Footer</div>
    </>
  )
}

export default HomeLayout