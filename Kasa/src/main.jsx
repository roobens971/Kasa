import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import "./index.css";
import "./sass/main.scss";

import Apropos from "./pages/Apropos.jsx";
import Accueil from "./pages/Accueil.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Accueil />,
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
