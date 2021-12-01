import styled, { css, keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';
import logo from './img/logo.png';

const leftEffect = keyframes`
  from {
    opacity: 0;
    transform: translateX(-40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.section`
  display: grid;
  gap: 1rem;
  grid-template-columns: ${(props) => props.columns || '1fr'};
  margin-top: 2rem;
  animation: ${leftEffect} 0.3s ease;

  img {
    display: block;
    width: 100%;
    border-radius: 10px;
  }
`;

export const StyledLink = styled(NavLink)`
  background-color: black;
  color: white;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  text-decoration: none;
  margin-right: 1rem;
  margin-top: 1rem;
  display: inline-block;

  &.active {
    background-color: #860035;
  }
`;

export const Title = styled.h1`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0 0 0.5rem;
  padding: 0;

  &:before {
    content: '';
    display: inline-block;
    height: 4px;
    width: 12px;
    vertical-align: middle;
    margin-right: 0.5rem;
    margin-left: 0.2rem;
    background-color: #860035;
  }
`;

export const SubTitle = styled.h3`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin: 0;
  padding: 0;
  font-size: 1rem;

  ${(props) =>
    props.selo &&
    css`
      &:before {
        content: '';
        height: 25px;
        width: 25px;
        display: inline-block;
        background: url(${logo});
        background-size: cover;
        background-position: center;
        vertical-align: middle;
      }
    `}
`;

export const Preco = styled.span`
  padding: 0.5rem 0.8rem;
  background: #00ff53;
  width: fit-content;
  border-radius: 4px;
  color: #005a00;
  font-weight: bolder;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;

export const Desc = styled.p`
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`;

export const FooterContent = styled.footer`
  font-size: 1rem;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  border-top: 2px solid #860035;
  padding-top: 1rem;
  margin-top: 2rem;
`;

const rotate = keyframes`
  from {
    transform:rotate(360deg)
  }
`;

export const Loading = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border: 7px solid #860035;
  border-top-color: transparent;
  animation: ${rotate} 1s linear infinite;
`;
