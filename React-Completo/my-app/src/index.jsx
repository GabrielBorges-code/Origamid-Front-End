import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Exemplos from "./Exemplos.jsx";
import Product from "./desafio03/Product.jsx";
import Home from "./desafio03/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Exemplos />,
  },
  {
    path: "/produtos",
    element: <Product />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
