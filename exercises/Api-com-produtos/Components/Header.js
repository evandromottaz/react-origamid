import React from 'react';
import { StyledLink } from '../styles';

const Header = () => {
  return (
    <div>
      <StyledLink to="/" end>
        Produtos
      </StyledLink>
      <StyledLink to="contato" end>
        Contato
      </StyledLink>
    </div>
  );
};

export default Header;
