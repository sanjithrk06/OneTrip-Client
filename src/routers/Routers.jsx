import { createBrowserRouter, createRoutesFromElements, Navigate, Route } from "react-router-dom";

//Elements Import
import { Home, AboutPage, NotFound } from '@pages';
import { Layout } from '@/layouts';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} >
      <Route path="" element={<Home/>} />
      <Route path="home" element={<Navigate to="/" />} />
      <Route path="about" element={<AboutPage/>} />
      <Route path="*" element={<NotFound/>} />
    </Route>
  )
)

export default router;