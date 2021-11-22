import React from 'react';
import Produto from './Produto';
import Head from './Head';
import { GlobalContext } from './GlobalStorage';
import IconLoading from './IconLoading';
import { Link } from 'react-router-dom';

const Home = () => {
  const fetchGlobal = React.useContext(GlobalContext);

  return (
    <section
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '2rem',
        width: '80vw',
        margin: '0 auto',
      }}
    >
      <Head title="Home" />

      {fetchGlobal.loading && <IconLoading></IconLoading>}
      {!fetchGlobal.loading &&
        fetchGlobal.itens &&
        fetchGlobal.itens.map((item) => (
          <Link to={item.nome}>
            <Produto key={item.id} img={item.fotos[0].src} name={item.nome} />
          </Link>
        ))}
    </section>
  );
};

export default Home;
