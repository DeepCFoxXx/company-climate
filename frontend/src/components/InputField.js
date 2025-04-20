import '../styles/InputField.css';

function InputField({ value, onChange, onKeyDown, error }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder="e.g. -5, -1, 0.2, 3"
      className={`temperature-input${error ? ' error' : ''}`}
      aria-invalid={error === true ? 'true' : undefined}
    />
  );
}

export default InputField;
