import React from 'react';
import Head from './Head';
import { left } from './Produto';
import styled from 'styled-components';
import img from './img/perfil.png';

const Container = styled.section`
  animation: ${left} 0.3s forwards;
  display: flex;
  width: 80vw;
  margin: 0 auto;
`;

const Parag = styled.p`
  margin: 0.4rem 0;
  padding: 0;
  font-size: 1.2rem;
  &:before {
    content: '';
    display: inline-block;
    width: 15px;
    margin-bottom: 5px;
    border-bottom: 2px solid darkred;
    margin-right: 5px;
  }
`;

const Infos = styled.div`
  margin-left: 2rem;
  font-family: nunito;
`;

const Contato = () => {
  return (
    <>
      <Head title="Contato" />
      <Container>
        <img src={img} alt="perfil" style={{ maxWidth: '200px' }} />
        <Infos>
          <h1>Entre em contato.</h1>
          <Parag>evandro.motta@live.com</Parag>
          <Parag>(16) 1234-3214</Parag>
          <Parag>Rua Onde eu moro, 123</Parag>
        </Infos>
      </Container>
    </>
  );
};

export default Contato;
