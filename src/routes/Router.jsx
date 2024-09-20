// React Router Components import
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

// Components import
import { HomeLayout } from "../layouts";
import { Famous, HomePage, TestPage } from "../pages";

// Famous Destination Componenets import
import { Tajmahal } from "../pages";

const Router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path="/" element={<HomeLayout />} >
        <Route path="" element={<HomePage />} />
        {/* Test Path */}
        <Route path="test/">
          <Route path="" element={<TestPage />} />
          {/*Famous Destinations Path */}
          <Route path="famous/" >
            <Route path="" element={<Famous />} />
            <Route path="taj-mahal" element={<Tajmahal />} />
          </Route>
        </Route>
      </Route>
      </>
    )
);

export default Router;