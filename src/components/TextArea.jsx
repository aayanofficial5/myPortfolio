import React from 'react';

const TextArea = ({ name, placeholder, value, onChange }) => {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      rows="5"
      value={value}
      onChange={onChange}
      className="p-3 rounded border dark:bg-secondary dark:border-gray-700 dark:text-white"
      required
    ></textarea>
  );
};

export default TextArea;
