import styled, { keyframes } from 'styled-components';

const animEffectLayer1 = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  25%, 75% {
    transform: translate3d(0, -100%, 0);
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }
  100% {
    transform: translate3d(0, -200%, 0);
  }
`;

const animEffectLayer2 = keyframes`
  0%, 12.5% {
    transform: translate3d(0, 0, 0);
  }
  37.5%, 62.5% {
    transform: translate3d(0, -100%, 0);
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }
  87.5%, 100% {
    transform: translate3d(0, -200%, 0);
  }
`;

const animEffectLayer3 = keyframes`
  0%, 25% {
    transform: translate3d(0, 0, 0);
    animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1.000);
  }
  75%, 100% {
    transform: translate3d(0, -200%, 0);
  }
`;

export const TransitionLayer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  animation: ${animEffectLayer1} 1.5s cubic-bezier(0.55, 0.055, 0.675, 0.19) forwards;
  background-color: ${props => props.theme.colors.mineShaft};
`;

export const PageTransitionWrapper = styled.div`
  display: none;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 100%;
  left: 0;
  pointer-events: none;
  z-index: 1000;

  ${TransitionLayer}:nth-child(2) {
    animation-name: ${animEffectLayer2};
    background-color: ${props => props.theme.colors.codGray};
  }

  ${TransitionLayer}:nth-child(3) {
    animation-name: ${animEffectLayer3};
    background-color: ${props => props.theme.colors.alabaster};
  }
`;
