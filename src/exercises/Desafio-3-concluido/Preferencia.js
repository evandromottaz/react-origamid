import React from 'react';

const Preferencia = ({ nome, preferencia }) => {
  return (
    <div>
      <h1>
        {nome}: {preferencia}
      </h1>
    </div>
  );
};

export default Preferencia;
