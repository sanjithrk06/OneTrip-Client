// React Router Components import
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

// Components import
import { HomeLayout } from "../layouts";
import { Famous, HomePage, TestPage } from "../pages";

const Router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path="/" element={<HomeLayout />} >
        <Route path="" element={<HomePage />} />
        <Route path="test/">
          <Route path="" element={<TestPage />} />
          <Route path="famous" element={<Famous />} />
        </Route>
      </Route>
      </>
    )
);

export default Router;