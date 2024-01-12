/* eslint-disable react/prop-types */

const Input = ({
  label,
  id,
  onChange,
  value,
  type = "text",
  onBlur,
  placeholder,
  error,
}) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onBlur={onBlur}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
};

export default Input;
