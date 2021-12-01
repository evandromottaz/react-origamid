// Utilize a API abaixo para puxar a lista de produto
// https://ranekapi.origamid.dev/json/api/produto
// Cada produto possui o id, o mesmo pode ser passado na api para retornar os dados desse produto específico
// https://ranekapi.origamid.dev/json/api/produto/notebook

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contato from './Components/Contato';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Produto from './Components/Produto';
import Produtos from './Components/Produtos';
import { Container } from './styles';

const App = () => {
  return (
    <Container columns="1fr" style={{ maxWidth: '80vw', margin: '0 auto' }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Produtos />} />
          <Route path="produto/:id" element={<Produto />} />
          <Route path="contato" element={<Contato />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Container>
  );
};

export default App;
