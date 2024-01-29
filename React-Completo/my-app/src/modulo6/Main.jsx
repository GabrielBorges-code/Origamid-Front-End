import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <h1>Título</h1>
      <p>home</p>
      <Link to="product/notebook">Noteboook</Link>
      <br />
      <Link to="product/notebook">SmarthPhone</Link>
    </div>
  );
};

export default Main;
