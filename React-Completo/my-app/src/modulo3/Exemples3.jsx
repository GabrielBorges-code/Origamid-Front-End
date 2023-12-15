import { useState } from "react";

const Exemples3 = () => {
  const [active, setActive] = useState(false);
  const [dataUser, setDataUser] = useState({
    nome: "Gabriel",
    idade: 25,
    faculdade: "não",
  });

  function handleClick() {
    setActive(!active);
    setDataUser({ ...dataUser, faculdade: active ? "sim" : "não" });
  }

  return (
    <div>
      <button onClick={handleClick}>{active ? "Ativo" : "Falso"}</button>
      <p>nome: {dataUser.nome}</p>
      <p>idade: {dataUser.idade}</p>
      <p>faculdade: {dataUser.faculdade}</p>
    </div>
  );
};

export default Exemples3;
