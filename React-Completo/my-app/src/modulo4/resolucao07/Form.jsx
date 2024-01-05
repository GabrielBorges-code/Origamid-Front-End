import { useState } from "react";

const formFields = [
  {
    id: "name",
    label: "Nome",
    type: "text",
  },
  {
    id: "email",
    label: "E-mail",
    type: "email",
  },
  {
    id: "password",
    label: "Senha",
    type: "password",
  },
  {
    id: "cep",
    label: "CEP",
    type: "text",
  },
  {
    id: "street",
    label: "Rua",
    type: "text",
  },
  {
    id: "number",
    label: "Número",
    type: "text",
  },
  {
    id: "neighborhood",
    label: "Bairro",
    type: "text",
  },
  {
    id: "city",
    label: "Cidade",
    type: "text",
  },
  {
    id: "state",
    label: "Estado",
    type: "text",
  },
];

const Form = () => {
  const [response, setResponse] = useState(null);
  const [form, setForm] = useState(
    formFields.reduce((acc, field) => {
      return {
        ...acc,
        [field.id]: "",
      };
    }, {})
  );

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    fetch("https://ranekapi.origamid.dev/json/api/usuario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }).then((response) => {
      setResponse(response);
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      {formFields.map(({ id, label, type }) => (
        <div key={id}>
          <label htmlFor={id}>{label}</label>
          <input id={id} type={type} value={form[id]} onChange={handleChange} />
        </div>
      ))}

      {response && response.ok && <p>Formulário Enviado</p>}
      <button>Enviar</button>
    </form>
  );
};

export default Form;
