import React from 'react';

const Button = ({ name, id, clica, ...props }) => {
  return (
    <button style={{ margin: '0.5rem', ...props }} id={id} onClick={clica}>
      {name}
    </button>
  );
};

export default Button;
