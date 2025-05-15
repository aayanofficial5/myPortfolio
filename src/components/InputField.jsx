const InputField = ({ name, type = 'text', placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="p-3 rounded border dark:bg-secondary dark:border-gray-700 dark:text-white"
      required
    />
  );
};

export default InputField;
