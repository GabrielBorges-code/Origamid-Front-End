import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Exemplos from "./modulo1-2/Exemplos.jsx";
import Main from "./modulo1-2/desafio03/Main.jsx";
import Exemples3 from "./modulo3/Exemples3.jsx";
import Product from "./modulo3/Product.jsx";
import { GlobalStorage } from "./modulo3/GlobalContext.jsx";
import { ProductsProvider } from "./modulo3/desafio6/GlobalProductsContext.jsx";
import ProductsChallenger from "./modulo3/desafio6/ProductsChallenger.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Exemplos />,
  },
  {
    path: "/produtos",
    element: <Main />,
  },
  {
    path: "/home",
    element: <Main />,
  },
  {
    path: "/examples3",
    element: <Exemples3 />,
  },
  {
    path: "/context",
    element: (
      <GlobalStorage>
        <Product />
      </GlobalStorage>
    ),
  },
  {
    path: "/challenger6",
    element: (
      <ProductsProvider>
        <ProductsChallenger />
      </ProductsProvider>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
