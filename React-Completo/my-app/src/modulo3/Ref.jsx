import { useState } from "react";
import { useRef } from "react";

const Ref = () => {
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState("");
  const iptElement = useRef();

  function handleClick() {
    setComments([...comments, input]);
    setInput("");
    iptElement.current.focus();
  }

  function handleClear() {
    setComments([]);
    setInput("")
    iptElement.current.focus();
  }

  return (
    <>
      <input
        ref={iptElement}
        type="text"
        value={input}
        onChange={({ target }) => setInput(target.value)}
      />

      <button onClick={handleClick}>enviar</button>
      <button onClick={handleClear}>limpar</button>

      {comments.map((comment, i) => (
        <li key={i}>{comment}</li>
      ))}
    </>
  );
};

export default Ref;
