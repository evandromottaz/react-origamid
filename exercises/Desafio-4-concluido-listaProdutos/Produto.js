import React from 'react';
import { GlobalContext } from './GlobalContext';

const Produto = () => {
  const global = React.useContext(GlobalContext);

  return (
    <div>
      Produtos: <button onClick={() => global.limparDados()}>Limpar</button>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
        }}
      >
        {global.dados.map(({ id, nome, preco, descricao, fotos }) => (
          <div
            key={id}
            style={{
              border: '1px solid',
              margin: '1rem .5rem',
              padding: '1rem',
              fontFamily: '--',
            }}
          >
            <img
              style={{ display: 'block', maxWidth: '100%' }}
              src={fotos[0].src}
              alt={fotos[0].titulo}
            />
            <p>{nome}:</p>
            <p>Preço: R$ {preco}</p>
            <small>{descricao}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Produto;
