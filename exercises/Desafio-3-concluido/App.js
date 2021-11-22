import React from 'react';
import Preferencia from './Preferencia';
import Produto from './Produto';

const App = () => {
  const [produto, setProduto] = React.useState(null);
  const [preferencia, setPreferencia] = React.useState(null);

  React.useEffect(() => {
    if (!produto && localStorage.nome) {
      async function fetchCarregamento() {
        const response = await fetch(
          `https://ranekapi.origamid.dev/json/api/produto/${localStorage.nome}`,
        );
        const json = await response.json();
        setProduto(json);
        setPreferencia(json.nome);
      }
      fetchCarregamento();
    }
  }, []);

  function handleClick(e) {
    async function fetchProdutos() {
      const response = await fetch(
        `https://ranekapi.origamid.dev/json/api/produto/${e.target.innerText}`,
      );
      const json = await response.json();
      setProduto(json);
      setPreferencia(json.nome);
      console.log(localStorage);
      localStorage.nome = json.nome;
      localStorage.preco = json.preco;
      localStorage.fotos = json.fotos[0].src;
      localStorage.titulo = json.fotos[0].titulo;
    }
    fetchProdutos();
  }

  return (
    <div>
      <Preferencia
        nome={'Preferencia'}
        preferencia={preferencia || localStorage.nome}
      />
      <button style={{ margin: '0.5rem' }} onClick={handleClick}>
        notebook
      </button>
      <button style={{ margin: '0.5rem' }} onClick={handleClick}>
        smartphone
      </button>
      {produto && <Produto produto={produto} />}
    </div>
  );
};

export default App;
