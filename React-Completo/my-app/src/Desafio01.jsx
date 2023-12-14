import React from 'react'

const App = () => {
  const luana = {
    cliente: "Luana",
    idade: 27,
    compras: [
      { nome: "Notebook", preco: "R$ 2500" },
      { nome: "Geladeira", preco: "R$ 3000" },
      { nome: "Smartphone", preco: "R$ 1500" },
    ],
    ativa: true,
  };

  const mario = {
    cliente: "Mario",
    idade: 31,
    compras: [
      { nome: "Notebook", preco: "R$ 2500" },
      { nome: "Geladeira", preco: "R$ 3000" },
      { nome: "Smartphone", preco: "R$ 1500" },
      { nome: "Guitarra", preco: "R$ 3500" },
    ],
    ativa: false,
  };

  const qual = false;
  const dados = qual ? mario : luana;

  const extraiValor = () => {
    const precos = dados.compras.map((compra) => {
      return Number(compra.preco.replace("R$ ", ""));
    });

    return precos;
  };

  const caclulaValor = (valores) => {
    let soma = 0;
    
    for (let i = 0; i < valores.length; i++) {
      soma += valores[i];
    }

    return soma;
  };

  const somaTotal = caclulaValor(extraiValor());

  return (
    <>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>
        Situação:{" "}
        {dados.ativa ? (
          <span style={{ color: "green" }}>ativo</span>
        ) : (
          <span style={{ color: "red" }}>inativo</span>
        )}
      </p>
      <p>Total de gasto: {somaTotal}</p>
      {somaTotal > 10000 && <p>Você está gastando muito</p>}
    </>
  );
};

export default App;
