import styled, { css } from 'styled-components';

const cursor = css`
  position: fixed;
  top: 0;
  left: 0;
  border-radius: 50%;
  pointer-events: none;

  &.visible {
    transition: transform 50ms;
    transition-timing-function: ease-out;
  }
`;

export const CursorInner = styled.div`
  ${cursor};
  top: -2.5px;
  left: -2.5px;
  width: 5px;
  height: 5px;
  z-index: 11000;
  background: ${props => props.theme.colors.white};
  opacity: 0;

  &.visible {
    opacity: 0.4;
  }

  ${props => props.hide
    && `
      opacity: 0 !important;
  `}
`;

export const CursorOuter = styled.div`
  ${cursor};
  width: 30px;
  height: 30px;
  z-index: 12000;
  border: 2px solid ${props => props.theme.colors.white};
  opacity: 0;

  &.visible {
    opacity: 1;
  }

  ${props => props.hide
    && `
      opacity: 0 !important;
  `}
`;
