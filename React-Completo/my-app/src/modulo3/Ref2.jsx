import { useRef, useState } from "react";

const Ref2 = () => {
  const [car, setCar] = useState(0);
  const [notification, setNotification] = useState(null);
  const timeoutRef = useRef();

  function handleClick() {
    setCar((car) => car + 1);
    setNotification("Item adicionado no carrinho");

    console.log("reference", timeoutRef.current);

    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setNotification(null);
    }, 1000);

    console.log("reference", timeoutRef.current);
  }
  return (
    <>
      <button onClick={handleClick}>add carrinho {car}</button>
      <p>{notification}</p>
    </>
  );
};

export default Ref2;
