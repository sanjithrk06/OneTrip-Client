// React Router Components import
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

// Components import
import { HomeLayout } from "../layouts";
import { Destination, HomePage, KindsOfDest, ListOfDest } from "../pages";

const Router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path="/" element={<HomeLayout />} >
        <Route path="" element={<HomePage />} />
        {/* Destinations Path */}
        <Route path="destinations/">
          <Route path=""  element={<KindsOfDest />} />
          <Route path=":category" element={<ListOfDest />} />
          <Route path="taj" element={<Destination />} />
        </Route>
      </Route>
      </>
    )
);

export default Router;