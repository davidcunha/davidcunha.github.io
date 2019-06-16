import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  /*
  ==========================================================================
    Document
  ==========================================================================

  1. Stretch <html> stretch to fill our screen height
  2. Make children of html (body) occupy at least 100% of the screen
  3. Viewport is scalable and occupies at least 325px (iPhone 5)
  */

  html {
    min-height: 100%;
    display: flex;
    min-width: 375px;
    flex-direction: column;
    box-sizing: border-box;
    overflow-x: hidden;
    background-color: ${props => props.theme.colors.mineShaft};
    cursor: none;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  /*
  ==========================================================================
    Body
  ==========================================================================

  1. Force scroll always to prevent scrollbars to appear/disappear based on the page contents
  2. Make sure that we occupy 100% of our parent and allow our child elements to do the same
  3. Needed for IE11 otherwise flex wouldn't grow vertically, see https://stackoverflow.com/a/42930574
  */

  body {
    border-right: 12px solid ${props => props.theme.colors.mineShaft};
    border-left: 12px solid ${props => props.theme.colors.mineShaft};
    overflow-x: hidden;
    display: flex;
    flex: 1 0 auto;
    margin: 0;
    flex-direction: column;
    background-color: ${props => (props.backgroundColor === 'dark' ? props.theme.colors.codGray : props.theme.colors.white)};
    color: ${props => (props.backgroundColor === 'dark' ? props.theme.colors.white : props.theme.colors.codGray)};
    font-family: 'IBM Plex Mono', monospace;
    font-weight: 400;
    font-style: normal;
    font-display: swap;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    overflow-wrap: break-word;
  }

  /* ==========================================================================
    Headings
  ========================================================================== */

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  /* ==========================================================================
    Anchors
  ========================================================================== */

  a,
  a:focus,
  a:visited,
  a:hover,
  a:active {
    display: inline-block;
    outline: none !important;
    color: ${props => props.theme.colors.white};
    text-decoration: none !important;
  }

  a[href^="tel"] {
    color: inherit;
  }

  /* ==========================================================================
    Inputs
  ========================================================================== */

  input {
    border-radius: 0;
  }

  textarea {
    resize: none;
  }

  select::-ms-expand {
    display: none;
  }

  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }

  input:not([value=""]) {
    border-color: ${props => props.theme.colors.white};
  }

  input:hover {
    border-color: ${props => props.theme.colors.white};
  }

  @keyframes autofill {
    to {
      background: transparent;
    }
  }

  input:-webkit-autofill {
    animation-name: autofill;
    animation-fill-mode: both;
    -webkit-text-fill-color: ${props => props.theme.colors.white};
  }

  ::placeholder {
    /* Most modern browsers support this now. */
    color: ${props => props.theme.colors.white};
  }

  /* ==========================================================================
    Transition
  ========================================================================== */

  .transition {
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 1000;
    pointer-events: none;
    left: 0;
    top: 100%;
  }

  .transition .transition-layer {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    animation: anim-effect-3-1 1.5s cubic-bezier(0.550, 0.055, 0.675, 0.190) forwards;
    background-color: ${props => props.theme.colors.mineShaft};
  }

  .transition .transition-layer:nth-child(2) {
    animation-name: anim-effect-3-2;
    background-color: ${props => props.theme.colors.codGray};
  }

  .transition .transition-layer:nth-child(3) {
    animation-name: anim-effect-3-3;
    background-color: ${props => props.theme.colors.alabaster};
  }

  @keyframes anim-effect-3-1 {
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
  }

  @keyframes anim-effect-3-2 {
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
  }

  @keyframes anim-effect-3-3 {
    0%, 25% {
      transform: translate3d(0, 0, 0);
      animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1.000);
    }
    75%, 100% {
      transform: translate3d(0, -200%, 0);
    }
  }
`;
