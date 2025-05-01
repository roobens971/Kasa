import * as React from "react";
import * as ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import Apropos from "./pages/Apropos.jsx";
import Accueil from "./pages/Accueil.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import "./sass/main.scss";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Accueil />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Apropos",
    element: <Apropos />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
