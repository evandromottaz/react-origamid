import React from 'react';

const Produto = () => {
  const produtos = [
    { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
    { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
  ];

  return (
    <div>
      {produtos.map((produto) => (
        <ul key={produto.nome} style={{ border: '1px solid' }}>
          <li style={{ margin: '1rem 0' }}>{produto.nome}</li>
          <ul>
            {produto.propriedades.map((prop, i) => (
              <li key={i}>{prop}</li>
            ))}
          </ul>
        </ul>
      ))}
    </div>
  );
};

export default Produto;
