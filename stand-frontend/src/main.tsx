import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import './index.css'
import { router } from "./routes";
import { ThemeProvider } from '@ui5/webcomponents-react';


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
        <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>

)