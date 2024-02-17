import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { autoLogin, fetchLogin } from "./store/login";
import { sum } from "./store/count";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const state = useSelector((state) => state);
  const { login } = state;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(autoLogin());
  }, [dispatch]);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(fetchLogin({ username, password }));
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Usuário
          <input
            style={{ display: "block" }}
            value={username}
            onChange={({ target }) => setUsername(target.value)}
            type="text"
          />
        </label>

        <label>
          Senha
          <input
            style={{ display: "block" }}
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            type="password"
          />
        </label>

        <button>Enviar</button>
      </form>

      <p>{login?.user?.data?.email}</p>

      <button onClick={() => dispatch(sum(5))}>somar</button>
    </>
  );
}

export default App;
