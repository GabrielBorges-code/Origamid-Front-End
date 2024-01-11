import { useState } from "react";
import Input from "./form/Input";
import Select from "./form/Select";
import Radio from "./form/Radio";
import Checkbox from "./form/Checkbox";

const Main = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [produto, setProduto] = useState("");
  const [cores, setCores] = useState("");
  const [linguagens, setLinguagens] = useState([]);
  const [termos, setTermos] = useState([]);

  console.log("nome: ", nome);
  console.log("email: ", email);
  console.log("produto: ", produto);
  console.log("cores: ", cores);
  console.log("linguagens: ", linguagens);
  console.log("termos: ", termos, termos.length > 0);

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <Checkbox
        options={["Li e aceito os termos"]}
        value={termos}
        setValue={setTermos}
      />

      <Checkbox
        options={["JavaScript", "Java", "PHP"]}
        value={linguagens}
        setValue={setLinguagens}
      />

      <Radio
        options={["Azul", "Vermelho", "Verde"]}
        value={cores}
        setValue={setCores}
      />

      <Select
        id="produto"
        label="Produto"
        value={produto}
        setValue={setProduto}
        options={["smarthphone", "notebook"]}
      />

      <Input value={nome} setValue={setNome} id="nome" label="Nome" required />
      <Input
        value={email}
        setValue={setEmail}
        id="email"
        label="E-mail"
        type="email"
      />

      <button>Enviar</button>
    </form>
  );
};

export default Main;
