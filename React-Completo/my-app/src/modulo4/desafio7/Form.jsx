//import React from 'react'

import { useState } from "react";
import useSaveDataUser from "./useSaveDataUser";

const Form = () => {
  const [message, setMessage] = useState("");
  const { data, error, loading, request } = useSaveDataUser();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    cep: "",
    street: "",
    number: "",
    neighborhood: "",
    city: "",
    state: "",
  });

  function handleChange({ target }) {
    const { id, value } = target;

    setForm({ ...form, [id]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    await request(form);

    if (data?.status !== 200) {
      setMessage(
        "Houve um erro na hora de fazer a requisição. ",
        data?.message
      );
      throw new Error("Erro na api");
    }

    setMessage("Dados enviados com sucesso", data?.message);
  }

  console.log("data", data);
  console.log("error", error);

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Nome</label>
      <input id="name" type="text" value={form.name} onChange={handleChange} />

      <label htmlFor="email">E-mail</label>
      <input
        id="email"
        type="email"
        value={form.email}
        onChange={handleChange}
      />

      <label htmlFor="pass">Senha</label>
      <input
        id="password"
        type="password"
        value={form.password}
        onChange={handleChange}
      />

      <label htmlFor="cep">CEP</label>
      <input id="cep" type="text" value={form.cep} onChange={handleChange} />

      <label htmlFor="street">Rua</label>
      <input
        id="street"
        type="text"
        value={form.street}
        onChange={handleChange}
      />

      <label htmlFor="number">Número</label>
      <input
        id="number"
        type="text"
        value={form.number}
        onChange={handleChange}
      />

      <label htmlFor="neighborhood">Bairro</label>
      <input
        id="neighborhood"
        type="text"
        value={form.neighborhood}
        onChange={handleChange}
      />

      <label htmlFor="city">Cidade</label>
      <input id="city" type="text" value={form.city} onChange={handleChange} />

      <label htmlFor="state">Estado</label>
      <input
        id="state"
        type="text"
        value={form.state}
        onChange={handleChange}
      />
      {loading && <p>Carregando...</p>}
      {message && <p>{message}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button>Enviar</button>
    </form>
  );
};

export default Form;
