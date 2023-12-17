import { useState } from "react";
import { getProduct } from "./service/service";

const Desafio4 = () => {
  const [products, setProducts] = useState({ response: null, products: null });
  // const [response, setResponse] = useState([]);

  async function fetchApi(item) {
    const response = await getProduct(item);
    const responseJSON = await response.json();

    setProducts({ response, products: responseJSON });
  }

  console.log("response", products?.response);

  return (
    <>
      <div style={{ display: "flex", gap: "20px" }}>
        <button onClick={() => fetchApi("notebook")}>notebook</button>
        <button onClick={() => fetchApi("smarthphone")}>smarthphone</button>
        <button onClick={() => fetchApi("tablet")}>tablet</button>
      </div>

      {products?.products && (
        <div>
          <h1>{products?.products.nome}</h1>
          <p>R$ {products?.products.preco}</p>
          <p>{products?.products.descricao}</p>
          {products?.products?.fotos?.map((foto, i) => (
            <div key={i}>
              <img src={foto.src} alt={foto.titulo} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Desafio4;
