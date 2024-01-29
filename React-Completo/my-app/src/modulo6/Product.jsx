import { useParams } from "react-router-dom";

const Product = () => {
  const { product } = useParams();

  return (
    <div>
      <h1>Produto</h1>
      {product && <p>{product}</p>}
    </div>
  );
};

export default Product;
