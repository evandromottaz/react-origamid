import React from 'react';
import Produtos from './Produtos';

const App = () => {
  const [produto, setProduto] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null);

  async function handleClick(e) {
    setCarregando(true);
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${e.target.innerText}`,
    );
    const json = await response.json();
    setProduto(json);
    setCarregando(false);
  }
  return (
    <>
      <button style={{ margin: '0.5rem' }} onClick={handleClick}>
        tablet
      </button>
      <button style={{ margin: '0.5rem' }} onClick={handleClick}>
        notebook
      </button>
      <button style={{ margin: '0.5rem' }} onClick={handleClick}>
        smartphone
      </button>
      {carregando && <p>Carregando</p>}
      {!carregando && produto && <Produtos produto={produto} />}
    </>
  );
};

export default App;
