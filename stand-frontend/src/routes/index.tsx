import { createHashRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import Launchpad from "../pages/FLP";

export const router = createHashRouter([
    {
        element: <App />,
        errorElement: <ErrorPage />,
        children: [{ path: "/", element: <Launchpad /> },
                   { path: "/results", element: <Launchpad /> },
                   { path: "*", element: <Launchpad /> }]
    }
]);
