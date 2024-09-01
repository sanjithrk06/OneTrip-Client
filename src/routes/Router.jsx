// React Router Components import
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

// Components import
import { HomeLayout } from "../layouts";
import { HomePage, TestPage } from "../pages";

const Router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path="/" element={<HomeLayout />} >
        <Route path="" element={<HomePage />} />
        <Route path="test" element={<TestPage />} />
      </Route>
      </>
    )
);

export default Router;