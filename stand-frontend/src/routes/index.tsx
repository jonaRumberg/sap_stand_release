import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import Launchpad from "../pages/FLP";
import CreateProductionOrder from "../pages/CreateProductionOrder"

export const router = createBrowserRouter([
    {
        element: <App />,
        errorElement: <ErrorPage />,

        children: [
            { path: "/", element: <Launchpad /> },
            { path: "/results", element: <Launchpad /> },
            { path: "/createPO", element: <CreateProductionOrder /> },
            { path: "*", element: <Launchpad /> }
        ]
    }
]);
