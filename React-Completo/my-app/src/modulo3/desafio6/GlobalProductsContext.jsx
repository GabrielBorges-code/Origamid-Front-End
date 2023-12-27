/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import { getProduct } from "../service/service";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [product, setProduct] = useState({});

  async function getItems() {
    const response = await getProduct("smartphone");
    const responseJSON = await response.json();
    setProduct(responseJSON);
  }

  useEffect(() => {
    getItems();
  }, []);

  const handleCleanProduct = () => {
    setProduct({});
  };

  return (
    <ProductsContext.Provider value={{ handleCleanProduct, product }}>
      {children}
    </ProductsContext.Provider>
  );
};
