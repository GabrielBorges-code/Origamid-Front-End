/* eslint-disable react/prop-types */

const Fieldset = ({ pergunta, options, value, id, onChange, active }) => {
  if (!active) return null;

  return (
    <fieldset
      style={{
        padding: "2rem",
        marginBottom: "1rem",
        border: "2px solid #939393",
        borderRadius: "8px",
      }}
    >
      <legend style={{ fontWeight: "bold" }}>{pergunta}</legend>

      {options.map((opt, i) => (
        <label
          key={i}
          style={{ marginBottom: "1rem", fontFamily: "monospace" }}
        >
          <input
            type="radio"
            id={id}
            checked={value === opt}
            value={opt}
            onChange={onChange}
          />
          {opt}
        </label>
      ))}
    </fieldset>
  );
};

export default Fieldset;
