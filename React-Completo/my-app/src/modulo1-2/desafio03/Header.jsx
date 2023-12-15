import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/produtos">Produtos</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
