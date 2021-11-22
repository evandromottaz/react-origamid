import React from 'react';
import { useLocation } from 'react-router';
import styled, { keyframes } from 'styled-components';

export const left = keyframes`
  from {
    opacity:0;
    transform:translateX(-40px)
  }
  to {
    opacity:1;
    transform:translateX(0)
  }
`;

const Produtos = styled.div`
  animation: ${left} 0.3s forwards;
`;

const Produto = ({ id, name, img, alt, onClick }) => {
  const location = useLocation();
  console.log(location);
  return (
    <Produtos id={id}>
      <img
        src={img}
        alt={alt}
        onClick={onClick}
        style={{ maxWidth: '100%', display: 'block' }}
      />
      <p
        style={{
          margin: '.5rem 0 0',
          paddding: '0',
          fontFamily: 'consolas',
          fontSize: '1.5rem',
        }}
      >
        {name}
      </p>
    </Produtos>
  );
};

export default Produto;
