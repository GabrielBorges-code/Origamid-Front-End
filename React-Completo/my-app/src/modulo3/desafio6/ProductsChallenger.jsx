import { useContext } from "react";
import { ProductsContext } from "./GlobalProductsContext";
import CleanButton from "./CleanButton";

const ProductsChallenger = () => {
  const { product } = useContext(ProductsContext);

  return (
    <div>
      {Object.keys(product).length > 0 ? (
        <>
          <h1>{product.nome}</h1>
          <p>{product.descricao}</p>
          <p>R$ {product.preco}</p>
        </>
      ) : (
        <p>Não há items</p>
      )}
      <br />
      <CleanButton />
    </div>
  );
};

export default ProductsChallenger;
