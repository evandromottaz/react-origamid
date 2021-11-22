import React from 'react';

const Produtos = (url) => {
  async function Request(url) {
    const response = await fetch(url);
    // const loading = new Promise(
    //   (response) => setTimeout(() => response('carregando')),
    //   1000,
    // );
    // document.getElementById('display').innerHTML = loading;
    const produtoJson = await response.json();

    [produtoJson].map(
      ({ nome, preco, descricao, fotos }) =>
        (document.getElementById('display').innerHTML = `<div>
            <img style="max-height:200px" src=${fotos[0].src} alt=${fotos[0].titulo}></img>
            <h1>
              ${nome}
            </h1>
            <p>Preço: <strong>R$ ${preco}</strong></p>
            <p style="border:1px solid;padding:1rem"><strong>Descrição</strong>:
            <small>${descricao}</small></p>
          </div>`),
    );
  }
  Request(url);

  return <></>;
};

export default Produtos;
