import { useEffect } from "react";
import useFetch from "./useFetch";
import useLocalStorage from "./useLocalStorage";

const Exemples3 = () => {
  const [product, setProduct] = useLocalStorage("product", "");
  const { data, request, loading, error } = useFetch();

  const handleClick = ({ target }) => {
    setProduct(target.innerText);
  };

  useEffect(() => {
    async function fetchData() {
      const { response, json } = await request(
        "https://ranekapi.origamid.dev/json/api/produto"
      );

      console.log(response, json);
    }
    fetchData();
  }, [request]);

  if (error) return <p>{error}</p>;
  if (loading) return <p>carregando...</p>;

  return (
    <>
      <p>
        Produto escolhido: <b>{product}</b>
      </p>
      <button onClick={handleClick}>smartphone</button>
      <button onClick={handleClick}>notebook</button>

      {data &&
        data.map((product) => (
          <div key={product.id}>
            <h1>{product.nome}</h1>
          </div>
        ))}
    </>
  );
};

export default Exemples3;
