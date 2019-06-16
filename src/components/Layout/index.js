import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import RebootStyle from '../../shared/reboot';
import GlobalStyle from '../../shared/globals';
import variables from '../../shared/variables';

class Layout extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    backgroundColor: PropTypes.string,
  };

  static defaulProps = {
    backgroundColor: 'dark',
  };

  componentDidMount() {
    const outerCursor = document.querySelector('.circle-cursor--outer');
    const innerCursor = document.querySelector('.circle-cursor--inner');
    const outerCursorBox = outerCursor.getBoundingClientRect();
    let clientX = window.innerWidth / 2;
    let clientY = window.innerHeight / 2;

    document.addEventListener('mousemove', (e) => {
      innerCursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
      innerCursor.classList.add('visible');

      outerCursor.style.transform = `translate(${clientX - outerCursorBox.width / 2}px, ${clientY
        - outerCursorBox.height / 2}px)`;
      outerCursor.classList.add('visible');

      /* eslint-disable prefer-destructuring */
      clientX = e.clientX;
      clientY = e.clientY;
      /* eslint-enable prefer-destructuring */
    });

    requestAnimationFrame(() => {
      innerCursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
    });
  }

  render() {
    return (
      <ThemeProvider theme={[variables].reduce((p, c) => Object.assign(p, c))}>
        <div>
          <RebootStyle />
          <GlobalStyle theme={variables} backgroundColor={this.props.backgroundColor} />
          <div className="circle-cursor circle-cursor--inner" />
          <div className="circle-cursor circle-cursor--outer" />
          {this.props.children}
        </div>
      </ThemeProvider>
    );
  }
}

export default Layout;
