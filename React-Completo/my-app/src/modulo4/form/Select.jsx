/* eslint-disable react/prop-types */

const Select = ({ id, label, value, setValue, options, ...props }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        value={value}
        onChange={({ target }) => setValue(target.value)}
        {...props}
      >
        <option disabled value="">
          Selecione
        </option>
        {options.map((opt, i) => (
          <option key={i} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
