import { useDispatch, useSelector } from "react-redux";

function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log(state);

  return (
    <div>
      <p>State: {state}</p>
      <button onClick={() => dispatch({ type: "INCREMENTAR" })}>
        Incrementar
      </button>

      <button onClick={() => dispatch({ type: "REDUZIR" })}>Reduzir</button>
    </div>
  );
}

export default App;
