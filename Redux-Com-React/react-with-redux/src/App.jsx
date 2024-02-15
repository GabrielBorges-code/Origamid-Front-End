import { useDispatch, useSelector } from "react-redux";
import { increment, reduce } from "./store/count";
import { open, close } from "./store/modal";

function App() {
  const state = useSelector((state) => state);
  const { count, modal } = state;
  const dispatch = useDispatch();

  return (
    <div>
      <p>Total: {count.total}</p>
      <p>Modal: {modal ? "abriu" : "fechou"}</p>

      <button onClick={() => dispatch(reduce())}>Reduzir</button>

      <button onClick={() => dispatch(increment())}>Incrementar</button>

      <br />

      <button onClick={() => dispatch(open())}>open modal</button>
      <button onClick={() => dispatch(close())}>close modal</button>
    </div>
  );
}

export default App;
