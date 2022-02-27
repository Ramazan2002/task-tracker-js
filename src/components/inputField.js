const InputField = ({ value, type, label, placeholder, onChange }) => (
  <label>
    {label}
    <input value={value} type={type} placeholder={placeholder} onChange={onChange} />
  </label>
);

export default InputField;
