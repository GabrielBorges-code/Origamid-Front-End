import { useState, useCallback } from "react";

const useSaveDataUser = (form) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  console.log(form);

  const request = useCallback(async () => {
    const url = "https://ranekapi.origamid.dev/json/api/usuario";

    try {
      setLoading(true);
      setError(null);

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const json = await response.json();
      setData(json);
      setLoading(false);
      return json;
    } catch (erro) {
      setError("Ocorreu um erro na hora de executar requisição");
      setData(null);
      setLoading(false);
      return erro
    }
  }, [form]);

  return { data, error, loading, request };
};

export default useSaveDataUser;
