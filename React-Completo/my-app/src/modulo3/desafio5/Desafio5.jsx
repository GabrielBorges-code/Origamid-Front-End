import { useEffect, useState } from "react";
import Product from "./Product";

const Desafio5 = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const productLocal = window.localStorage.getItem("product");
    if (productLocal !== null) setProduct(productLocal);
  }, []);

  useEffect(() => {
    if (product !== null) window.localStorage.setItem("product", product);
  }, [product]);

  function saveItemLocalStorage({ target }) {
    setProduct(target.innerText);
  }

  return (
    <>
      <div style={{ display: "flex", gap: "20px" }}>
        <button onClick={saveItemLocalStorage}>notebook</button>
        <button onClick={saveItemLocalStorage}>smartphone</button>
      </div>

      <h1>Preferência: {product}</h1>

      <Product product={product} />
    </>
  );
};

export default Desafio5;
