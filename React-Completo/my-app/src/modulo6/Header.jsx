import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav>
      <ul style={{ display: "flex", textDecoration: "none", gap: "30px" }}>
        <li style={{ listStyleType: "none" }}>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>
        |
        <li style={{ listStyleType: "none" }}>
          <NavLink to="sobre">Sobre</NavLink>
        </li>
        |
        <li style={{ listStyleType: "none" }}>
          <NavLink to="login">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
