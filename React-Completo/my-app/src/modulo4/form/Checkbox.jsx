/* eslint-disable react/prop-types */

const Checkbox = ({ options, value, setValue }) => {
  function handleChange({ target }) {
    if (target.checked) {
      setValue([...value, target.value]);
    } else {
      setValue(value.filter((item) => item !== target.value));
    }
  }

  return (
    <>
      {options.map((opt, i) => (
        <label key={i}>
          <input
            type="checkbox"
            value={opt}
            checked={value.includes(opt)}
            onChange={handleChange}
          />
          {opt}
        </label>
      ))}
    </>
  );
};

export default Checkbox;
