/* eslint-disable react/prop-types */
import { useEffect } from "react";

const Produto = () => {
  function handleScroll(event) {
    console.log(event);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ height: "200vh" }}>
      <p>meu produto</p>
    </div>
  );
};

export default Produto;
