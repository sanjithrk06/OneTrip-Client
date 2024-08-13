import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { HomeLayout } from "../layouts";
import { Home } from "../pages";

const Router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<HomeLayout />} >
            <Route path="" element={<Home />} />
        </Route>
    )
);

export default Router;
