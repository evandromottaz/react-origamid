// Utilize o GlobalContext do exemplo anterior para puxar os dados da API abaixo:
// https://ranekapi.origamid.dev/json/api/produto/
// assim que o usuário acessar o app
// coloque os dados da API no contexto global, dando acesso aos dados da mesma
// defina uma função chamada limparDados que é responsável por zerar os dados de produto
// e exponha essa função no contexto global

import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [dados, setDados] = React.useState([]);

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/')
      .then((r) => r.json())
      .then((json) => setDados(json));
  }, []);

  function limparDados() {
    setDados([]);
  }

  return (
    <GlobalContext.Provider value={{ dados, setDados, limparDados }}>
      {children}
    </GlobalContext.Provider>
  );
};
