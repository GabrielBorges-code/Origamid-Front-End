/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const Product = ({ product }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!product) return;
    const url = `https://ranekapi.origamid.dev/json/api/produto/${product}`;

    fetch(url)
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((error) => console.error("error: ", error));

  }, [product]);

  return (
    <>
      {data && (
        <div>
          <h1>{data?.nome}</h1>
          <p>R$ {data?.preco}</p>
        </div>
      )}
    </>
  );
};

export default Product;
