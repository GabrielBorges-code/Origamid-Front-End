import Titulo from "./Title";

const Product = () => {
  const produtos = [
    { nome: "Notebook", propriedades: ["16gb ram", "512gb"] },
    { nome: "Smathphone", propriedades: ["4gb ram", "128gb"] },
  ];

  return (
    <>
      <Titulo title="Produtos" />

      {produtos.map((produto, i) => (
        <div
          key={i}
          style={{ border: "1px solid black", margin: "16px", padding: "8px" }}
        >
          <h3>{produto.nome}</h3>
          {produto.propriedades.map((prop, i) => (
            <li key={i}>{prop}</li>
          ))}
        </div>
      ))}
    </>
  );
};

export default Product;
