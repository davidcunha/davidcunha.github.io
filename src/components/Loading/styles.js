import styled, { keyframes } from 'styled-components';

const changeContent = keyframes`
  10% { content: "⠙"; }
  20% { content: "⠹"; }
  30% { content: "⠸"; }
  40% { content: "⠼"; }
  50% { content: "⠴"; }
  60% { content: "⠦"; }
  70% { content: "⠧"; }
  80% { content: "⠇"; }
  90% { content: "⠏"; }
`;

export default styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.white};
  min-height: 100vh;

  &:after {
    content: '⠋';
    display: block;
    animation: ${changeContent} 0.8s linear infinite;
    font-size: 80px;
  }
`;
