import React from 'react';
import { Container, SubTitle, Loading } from '../styles';
import { Link } from 'react-router-dom';
import Head from './Head';

const Produtos = () => {
  const [produtos, setProdutos] = React.useState(null);

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto')
      .then((r) => r.json())
      .then((json) => {
        setProdutos(json);
      });
  }, []);

  if (produtos === null) return <Loading />;
  return (
    <Container columns="repeat(3, 1fr)">
      <Head title="Logix" />
      {produtos &&
        produtos.map((produto) => (
          <Link to={`produto/${produto.id}`} key={produto.id}>
            <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
            <SubTitle>{produto.nome}</SubTitle>
          </Link>
        ))}
    </Container>
  );
};

export default Produtos;
