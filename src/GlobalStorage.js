import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [itens, setItens] = React.useState([]);
  const [loading, setLoading] = React.useState(null);

  async function fechProdutos() {
    setLoading(true);
    const response = await fetch(
      'https://ranekapi.origamid.dev/json/api/produto',
    );
    const json = await response.json();
    setItens(json);
    setLoading(null);
  }

  React.useEffect(() => {
    fechProdutos();
  }, []);

  return (
    <GlobalContext.Provider value={{ itens, setItens, loading, fechProdutos }}>
      {children}
    </GlobalContext.Provider>
  );
};
