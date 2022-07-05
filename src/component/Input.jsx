import "./Input.css";

const Input = ({ id, label, type, placeholder }) => {
  return (
    <div className="input">
      <label htmlFor={id} className="input_label">
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="input__input"
      />
    </div>
  );
};

export default Input;
