import React from 'react';

const Input = ({
  value,
  label,
  id,
  onChange,
  type,
  onBlur,
  placeholder,
  error,
}) => {
  return (
    <>
      <label style={{ display: 'block' }} htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        name={id}
        onChange={onChange}
        placeholder={placeholder}
        onBlur={onBlur}
        type={type}
        value={value}
      />
      {error && <p>{error}</p>}
    </>
  );
};

export default Input;
