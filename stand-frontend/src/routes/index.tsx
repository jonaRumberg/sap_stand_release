import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import Launchpad from "../pages/FLP";
import InfoPageStudies from "../pages/InfoPageStudies";

export const router = createBrowserRouter([
    {
        element: <App />,
        errorElement: <ErrorPage />,

        children: [
            { path: "/", element: <Launchpad /> },
            { path: "/results", element: <Launchpad /> },
            { path: "*", element: <Launchpad /> },
            { path: "/info", element: < InfoPageStudies/> }
        ]
    }
]);