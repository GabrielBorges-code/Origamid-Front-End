import { useContext } from "react";
import { GlobalContext } from "./GlobalContext";

const Product = () => {
  const { count, setCount } = useContext(GlobalContext);

  return (
    <div>
      <p>Contar: {count}</p>
      <button onClick={() => setCount(count + 1)}>Contar</button>
    </div>
  );
};

export default Product;
