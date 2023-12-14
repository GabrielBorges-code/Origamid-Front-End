import Input from "./Input";
import Button from "./Button";

const Form = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Input id="nome" label="Nome" required />
      <Input id="email" label="Email" />
      <Button name="Enviar" />
    </form>
  );
};

export default Form;
