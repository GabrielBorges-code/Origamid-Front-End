import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Main from "./modulo6/Main";

import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./modulo6/About";
import Header from "./modulo6/Header";
import Footer from "./modulo6/Footer";
import NotFound from "./modulo6/NotFound";
import Login from "./modulo6/Login";
import Product from "./modulo6/Product";

{
  /*const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/desafio",
    element: <Resolution />,
  },
]);*/
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="sobre" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="product/:product" element={<Product />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>
);
