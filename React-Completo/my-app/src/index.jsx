import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Exemplos from "./modulo1-2/Exemplos.jsx";
import Main from "./modulo1-2/desafio03/Main.jsx";

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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
