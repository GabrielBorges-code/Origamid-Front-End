/* eslint-disable react/prop-types */
import React from "react";
import Header from "./Header";
import Home from  "./Home";
import Product from  "./Product";
import { useLocation } from "react-router-dom";

const Produtos = () => {
  const { pathname } = useLocation();
  console.log(location);

  return (
    <React.Fragment>
      <Header />

      {pathname === "/home" && <Home />}
      {pathname === "/produtos" && <Product />}

    </React.Fragment>
  );
};

export default Produtos;
