import { useContext } from "react";
import { ProductsContext } from "./GlobalProductsContext";

const CleanButton = () => {
  const { handleCleanProduct } = useContext(ProductsContext);

  return <button onClick={handleCleanProduct}>Limpar</button>;
};

export default CleanButton;
