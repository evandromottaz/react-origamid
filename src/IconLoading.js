import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  to {transform:rotate(1turn)}
`;

const LoadingState = styled.div`
  border: 0.8rem solid #fff;
  border-top-color: #eee;
  border-right-color: #eee;
  border-bottom-color: #eee;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  animation: ${rotate} 1s linear infinite;
`;

export default LoadingState;
