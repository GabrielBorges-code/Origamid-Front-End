import React from 'react'

const Desafio02 = () => {
  const produtos = [
    {
      id: 1,
      nome: "Smartphone",
      preco: "R$ 2000",
      cores: ["#29d8d5", "#252a34", "#fc3766"],
    },
    {
      id: 2,
      nome: "Notebook",
      preco: "R$ 3000",
      cores: ["#ffd045", "#d4394b", "#f37c59"],
    },
    {
      id: 3,
      nome: "Tablet",
      preco: "R$ 1500",
      cores: ["#365069", "#47c1c8", "#f95786"],
    },
  ];

  return (
    <>
      {produtos
        .filter((produto) => Number(produto.preco.replace("R$", "")) > 1500)
        .map((produto, i) => (
          <div key={i}>
            <h1>{produto.nome}</h1>
            <p>Preço: {produto.preco}</p>
            {produto.cores.map((cor) => (
              <li
                style={{
                  listStyle: "none",
                  background: cor,
                  marginLeft: "50px",
                }}
                key={cor}
              >
                {cor}
              </li>
            ))}
          </div>
        ))}
    </>
  );
};

export default Desafio02;
