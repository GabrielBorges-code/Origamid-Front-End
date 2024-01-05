//import React from 'react'

import { useState } from "react";
import useSaveDataUser from "./useSaveDataUser";

const Form = () => {
  const [message, setMessage] = useState("");
  const { data, error, loading, request } = useSaveDataUser();
  const [form, setForm] = useState({
    nome: "",
    email: "",
    senha: "",
    cep: "",
    rua: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: "",
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

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input id="nome" type="text" value={form.nome} onChange={handleChange} />

      <label htmlFor="email">E-mail</label>
      <input
        id="email"
        type="email"
        value={form.email}
        onChange={handleChange}
      />

      <label htmlFor="senha">Senha</label>
      <input
        id="senha"
        type="password"
        value={form.senha}
        onChange={handleChange}
      />

      <label htmlFor="cep">CEP</label>
      <input id="cep" type="text" value={form.cep} onChange={handleChange} />

      <label htmlFor="rua">Rua</label>
      <input
        id="rua"
        type="text"
        value={form.rua}
        onChange={handleChange}
      />

      <label htmlFor="numero">Número</label>
      <input
        id="numero"
        type="text"
        value={form.numero}
        onChange={handleChange}
      />

      <label htmlFor="bairro">Bairro</label>
      <input
        id="bairro"
        type="text"
        value={form.bairro}
        onChange={handleChange}
      />

      <label htmlFor="cidade">Cidade</label>
      <input id="cidade" type="text" value={form.cidade} onChange={handleChange} />

      <label htmlFor="estado">Estado</label>
      <input
        id="estado"
        type="text"
        value={form.estado}
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
