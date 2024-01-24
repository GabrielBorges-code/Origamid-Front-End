import { useState } from "react";
import Question from "./Question";

const Challenge = () => {
  const [step, setStep] = useState(0);
  const [choose, setChoose] = useState([]);
  const [awnser, setAwser] = useState([]);
  const [hits, setHits] = useState(0);
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

  function handleSubmit(event) {
    event.preventDefault();
    setAwser([...awnser, choose]);

    if (step === perguntas.length) {
      perguntas.map((opt) => opt.resposta);
      
      awnser
    }

    console.log("chamo o sub");
  }

  function handleChange() {
    // if (step === 3) return;

    setStep(step + 1);
  }

  console.log("awnser ", awnser);
  console.log("perguntas ", step === perguntas.length);

  return (
    <form onSubmit={handleSubmit}>
      {step <= 3 ? (
        <>
          <Question
            asking={perguntas[step].pergunta}
            options={perguntas[step].options.map((opt) => opt)}
            value={choose}
            setValue={setChoose}
          />
        </>
      ) : (
        <>
          <p>Você acertou {hits}</p>
        </>
      )}

      <br />

      <button onClick={handleChange}>Próximo</button>
    </form>
  );
};

export default Challenge;
