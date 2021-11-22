// Utilize a API abaixo para puxar a lista de produto
// https://ranekapi.origamid.dev/json/api/produto
// Cada produto possui o id, o mesmo pode ser passado na api para retornar os dados desse produto específico
// https://ranekapi.origamid.dev/json/api/produto/notebook

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contato from './Contato';
import Header from './Header';
import Home from './Home';
import { GlobalStorage } from './GlobalStorage';
import Produto from './Produto';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStorage>
        <Header />
        <Routes>
          <Route path="contato" element={<Contato />} />
          <Route path="/" element={<Home />} />
          <Route path="produto/:nomeProd" element={<Produto />} />
        </Routes>
      </GlobalStorage>
    </BrowserRouter>
  );
};

export default App;
