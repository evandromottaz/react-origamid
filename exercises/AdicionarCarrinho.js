import React from 'react';
import Formulario from './Formulario';

const AdicionarCarrinho = () => {
  const [carrinho, setCarrinho] = React.useState(0);
  const [adicionado, setAdicionado] = React.useState('');

  // salva o timeout
  const timeoutRef = React.useRef();

  function handleClick() {
    setCarrinho(carrinho + 1);
    setAdicionado('item adicionado');

    // reseta o timeout salvo
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setAdicionado(null);
    }, 3000);
  }

  return (
    <div>
      <Formulario />
      <button onClick={handleClick}>Adicionar ao carrinho: {carrinho}</button>
      <p>{adicionado}</p>
    </div>
  );
};

export default AdicionarCarrinho;
