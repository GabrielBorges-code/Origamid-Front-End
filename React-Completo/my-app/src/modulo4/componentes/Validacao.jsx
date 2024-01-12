import Input from "../form/Input";
import useForm from "../hooks/useForm";

const Validacao = () => {
  const cep = useForm("cep");
  const email = useForm("email");
  const nome = useForm();
  const sobrenome = useForm(false);

  function handleSubmit(event) {
    event.preventDefault();

    if (cep.validate() && email.validate() && nome.validate()) {
      console.log("enviou");
    } else {
      console.log("não enviou");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input label="Nome" id="name" type="text" placeholder="João" {...nome} />

      <Input
        label="Sobrenome"
        id="sobrenome"
        type="text"
        placeholder="Santos"
        {...sobrenome}
      />

      <Input
        label="E-mail"
        id="email"
        type="email"
        placeholder="email@email.com"
        {...email}
      />

      <Input
        label="CEP"
        id="cep"
        type="text"
        placeholder="00000-000"
        {...cep}
      />

      <button>Enviar</button>
    </form>
  );
};

export default Validacao;
