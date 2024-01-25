import { useState } from "react";
import Fieldset from "./Fieldset";

const perguntas = [
  {
    pergunta: "Qual método é utilizado para criar componentes?",
    options: [
      "React.makeComponent()",
      "React.createComponent()",
      "React.createElement()",
    ],
    resposta: "React.createElement()",
    id: "p1",
  },
  {
    pergunta: "Como importamos um componente externo?",
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: "p2",
  },
  {
    pergunta: "Qual hook não é nativo?",
    options: ["useEffect()", "useFetch()", "useCallback()"],
    resposta: "useFetch()",
    id: "p3",
  },
  {
    pergunta: "Qual palavra deve ser utilizada para criarmos um hook?",
    options: ["set", "get", "use"],
    resposta: "use",
    id: "p4",
  },
];

const Resolution = () => {
  const [slide, setSlide] = useState(0);
  const [pontuacao, setPontuacao] = useState(null);
  const [respostas, setRespostas] = useState({
    p1: "",
    p2: "",
    p3: "",
    p4: "",
  });

  function handleChange({ target }) {
    setRespostas({ ...respostas, [target.id]: target.value });
  }

  function resultado() {
    const corretas = perguntas.filter(
      ({ id, resposta }) => respostas[id] === resposta
    );
    setPontuacao(`Você acertou ${corretas.length} de ${perguntas.length}`);
  }

  function handleClick() {
    if (slide < perguntas.length - 1) {
      setSlide(slide + 1);
    } else {
      setSlide(slide + 1);
      resultado();
    }
  }

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      {perguntas.map((pergunta, i) => (
        <Fieldset
          active={slide === i}
          key={pergunta.id}
          value={respostas[pergunta.id]}
          {...pergunta}
          onChange={handleChange}
        />
      ))}

      <br />

      {pontuacao ? (
        <p>{pontuacao}</p>
      ) : (
        <button onClick={handleClick}>Próximo</button>
      )}
    </form>
  );
};

export default Resolution;
