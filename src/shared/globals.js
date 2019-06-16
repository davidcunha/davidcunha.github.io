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
    overflow-wrap: break-word; /* Break long words by default */
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
    Cursor
  ========================================================================== */

  .circle-cursor {
    position: fixed;
    top: 0;
    left: 0;
    border-radius: 50%;
    pointer-events: none;
  }

  .circle-cursor--outer,
  .circle-cursor--inner {
    opacity: 0;
  }

  .circle-cursor--outer {
    width: 30px;
    height: 30px;
    z-index: 12000;
    border: 2px solid ${props => props.theme.colors.white};
  }

  .circle-cursor--inner {
    top: -2.5px;
    left: -2.5px;
    width: 5px;
    height: 5px;
    z-index: 11000;
    background: ${props => props.theme.colors.white};
  }

  .circle-cursor--outer.visible {
    opacity: 0.4;
    transition: transform 50ms;
    transition-timing-function: ease-out;
  }

  .circle-cursor--inner.visible {
    opacity: 1;
    transition: transform 50ms;
    transition-timing-function: ease-out;
  }
`;
