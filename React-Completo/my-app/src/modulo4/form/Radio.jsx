/* eslint-disable react/prop-types */

const Radio = ({ options, value, setValue, ...props }) => {
  return (
    <>
      {options.map((opt, i) => (
        <label key={i}>
          <input
            value={opt}
            type="radio"
            checked={value === opt}
            onChange={({ target }) => setValue(target.value)}
            {...props}
          />
          {opt}
        </label>
      ))}
    </>
  );
};

export default Radio;
