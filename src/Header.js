import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: black;
  background-color: #eee;
  padding: 5px 10px;
  margin: 1rem 0 2rem;
  display: inline-block;
  text-decoration: none;
  border-radius: 4px;
  font-size: 1.5rem;
  font-family: consolas;

  &.active {
    background-color: rgba(0, 0, 0, 0.2);
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
  & + & {
    margin-left: 2rem;
  }
`;

const Header = () => {
  return (
    <header style={{ width: '80vw', margin: '0 auto' }}>
      <StyledLink to="/" end>
        Produtos
      </StyledLink>
      <StyledLink to="contato">Contato</StyledLink>
    </header>
  );
};

export default Header;
