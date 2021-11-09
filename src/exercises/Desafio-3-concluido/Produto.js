import React from 'react';

const Produto = ({ produto }) => {
  return (
    <div>
      <p>{produto.nome}</p>
      <p>R$ {produto.preco}</p>
      <img
        style={{ width: '200px' }}
        src={produto.fotos[0].src}
        alt={produto.fotos[0].titulo}
      />
    </div>
  );
};

export default Produto;
