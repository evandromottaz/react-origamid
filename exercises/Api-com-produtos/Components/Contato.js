import React from 'react';
import { Container, SubTitle, Title } from '../styles';
import perfil from '../img/perfil.png';
import Head from './Head';

const Contato = () => {
  return (
    <Container columns="250px 1fr">
      <Head title="Logix | Contato" />
      <div>
        <img src={perfil} alt="perfil" />
      </div>
      <div>
        <Title>Evandro</Title>
        <SubTitle selo>React Developer</SubTitle>
      </div>
    </Container>
  );
};

export default Contato;
