/* eslint-disable react/prop-types */

const Question = ({ asking, options, value, setValue, ...props }) => {
  console.log(value);

  return (
    <fieldset>
      <legend>
        <b>{asking}</b>
      </legend>

      {options.map((opt, i) => (
        <label key={i}>
          <input
            type="radio"
            name={opt}
            checked={opt === value}
            value={opt}
            onChange={({ target }) => setValue(target.value)}
            {...props}
          />
          {opt}
        </label>
      ))}
    </fieldset>
  );
};

export default Question;
