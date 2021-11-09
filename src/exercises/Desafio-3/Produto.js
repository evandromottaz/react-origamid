import React from 'react';

const Produto = ({ produto }) => {
  const [dados, setDados] = React.useState(null);

  // se produto for diferente de null, jogue o json dentro de dados
  React.useEffect(() => {
    if (produto !== null)
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
        .then((response) => response.json())
        .then((json) => setDados(json));
  }, [produto]);

  // se não tiver json, return null
  if (dados === null) return null;
  return (
    <div>
      <p>{dados.nome}</p>
      <p>R$ {dados.preco}</p>
      <img
        style={{ width: '200px' }}
        src={dados.fotos[0].src}
        alt={dados.fotos[0].titulo}
      />
    </div>
  );
};

export default Produto;
