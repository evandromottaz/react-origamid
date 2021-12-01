import React from 'react';
import { useParams } from 'react-router';
import { Container, Loading, Preco, Desc, Title } from '../styles';
import Head from './Head';

const Produto = () => {
  const { id } = useParams();
  const [produto, setProdutos] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    async function fetchProdutos(url) {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setProdutos(json);
      } catch (erro) {
        setError('Um erro ocorreu');
      } finally {
        setLoading(false);
      }
    }
    fetchProdutos(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);

  if (error) return <p>{error}</p>;
  if (loading) return <Loading />;
  if (produto === null) return null;
  return (
    <Container columns="1fr">
      <Head title={'Logix | ' + produto.nome} />
      <Title>{produto.nome}</Title>
      <Preco>R$ {Math.floor(produto.preco).toFixed(2).replace('.', ',')}</Preco>
      <Desc>{produto.descricao}</Desc>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          width: '80vw',
          gap: '2rem',
        }}
      >
        {produto.fotos.map((foto) => (
          <img
            key={foto.titulo}
            src={foto.src}
            alt={foto.titulo}
            style={{ maxWidth: '25vw' }}
          />
        ))}
      </div>
    </Container>
  );
};

export default Produto;
