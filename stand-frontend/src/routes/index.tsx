import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import Launchpad from "../pages/FLP";
import CreateProductionOrder from "../pages/CreateProductionOrder"
import ProductionList from "../pages/ProductionList";
import InfoPageStudies from "../pages/InfoPageStudies";
import OrderOverview from "../pages/OrderOverview";
import GameStart from "../pages/GameStart";

export const router = createBrowserRouter([
    {
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { path: "*", element: <Launchpad /> },
            { path: "/", element: <Launchpad /> },
            { path: "/createPO", element: <CreateProductionOrder /> },
            { path: "/orders", element: <OrderOverview/> },
            { path: "/info", element: <InfoPageStudies/> },
            { path: "/productionList", element: <ProductionList /> },
            { path: "/gameStart", element: <GameStart /> },
        ]
    }
]);
