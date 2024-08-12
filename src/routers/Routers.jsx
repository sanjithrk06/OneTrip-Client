import { createBrowserRouter, createRoutesFromElements, Navigate, Route } from "react-router-dom";

//Elements Import
import { HomePage, NotFound } from '@pages';
import { Layout } from '@/layouts';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} >
      <Route path="" element={<HomePage/>} />
      <Route path="home" element={<Navigate to="/" />} />
      <Route path="*" element={<NotFound/>} />
    </Route>
  )
)

export default router;