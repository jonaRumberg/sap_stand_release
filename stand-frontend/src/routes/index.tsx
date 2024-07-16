import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import Launchpad from "../pages/FLP";
import ProductionList from "../pages/ProductionList";

export const router = createBrowserRouter([
    {
        element: <App />,
        errorElement: <ErrorPage />,
        children: [{ path: "/", element: <Launchpad /> },
                   { path: "/results", element: <Launchpad /> },
                   { path: "/productionList", element: <ProductionList /> },
                   { path: "*", element: <Launchpad /> }]
    }
]);
