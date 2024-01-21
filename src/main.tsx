import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import { About, Blog, Contact, Github, Home } from "./components";

// defining the router props for RouterProvider
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "", // / paxi kei na vaye render Home
        element: <Home />,
      },
      {
        path: "about", // / ta pailai xa as hamle  / ko children ma yo lekhdai xam. means /about ma k dekhauni
        element: <About />,
      },
      {
        path: "contactus", // / ta pailai xa as hamle  / ko children ma yo lekhdai xam. means /about ma k dekhauni
        element: <Contact />,
      },
      {
        path: "blogid/:userid", // / ta pailai xa as hamle  / ko children ma yo lekhdai xam. means /about ma k dekhauni
        element: <Blog />,
      },
      {
        path: "github", // / ta pailai xa as hamle  / ko children ma yo lekhdai xam. means /about ma k dekhauni
        element: <Github />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
