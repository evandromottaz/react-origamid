import React from 'react';
import Produtos from './Produtos';
import Button from './Button';

const App = () => {
  const [produto, setProduto] = React.useState(null);

  function tablet() {
    Produtos('https://ranekapi.origamid.dev/json/api/produto/tablet');
    setProduto(produto);
  }

  function smartphone() {
    Produtos('https://ranekapi.origamid.dev/json/api/produto/smartphone');
  }

  function notebook() {
    Produtos('https://ranekapi.origamid.dev/json/api/produto/notebook');
  }

  return (
    <>
      <div id={'display'}>{produto ? produto : null}</div>
      <Button
        background={'purple'}
        color={'white'}
        clica={tablet}
        id={'tablet'}
        name={'Tablet'}
      />
      <Button
        background={'red'}
        color={'white'}
        clica={smartphone}
        name={'Smartphone'}
      />
      <Button
        background={'black'}
        color={'white'}
        clica={notebook}
        name={'Notebook'}
      />
    </>
  );
};

export default App;
