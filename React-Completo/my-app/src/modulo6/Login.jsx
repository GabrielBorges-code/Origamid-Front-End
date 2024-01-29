import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  function handleClick() {
    console.log("fazer login");
    navigate("/sobre");
  }

  return (
    <>
      <h1>Login</h1>
      <button className="btn btn-primary" onClick={handleClick}>
        fazer login
      </button>
    </>
  );
};

export default Login;
