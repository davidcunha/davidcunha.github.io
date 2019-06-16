import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import RebootStyle from '../../shared/reboot';
import GlobalStyle from '../../shared/globals';
import variables from '../../shared/variables';
import { CursorInner, CursorOuter } from './styles';

class Layout extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    backgroundColor: PropTypes.string,
    isLoading: PropTypes.bool,
  };

  static defaulProps = {
    backgroundColor: 'dark',
  };

  constructor(props) {
    super(props);

    this.cursorInnerRef = React.createRef();
    this.cursorOuterRef = React.createRef();
  }

  componentDidMount() {
    const cursorOuter = this.cursorOuterRef.current;
    const cursorInner = this.cursorInnerRef.current;
    const cursorOuterBox = cursorOuter.getBoundingClientRect();
    let clientX = window.innerWidth / 2;
    let clientY = window.innerHeight / 2;

    document.addEventListener('mousemove', (e) => {
      cursorInner.style.transform = `translate(${clientX}px, ${clientY}px)`;
      cursorInner.classList.add('visible');

      cursorOuter.style.transform = `translate(${clientX - cursorOuterBox.width / 2}px, ${clientY
        - cursorOuterBox.height / 2}px)`;
      cursorOuter.classList.add('visible');

      /* eslint-disable prefer-destructuring */
      clientX = e.clientX;
      clientY = e.clientY;
      /* eslint-enable prefer-destructuring */
    });

    requestAnimationFrame(() => {
      cursorInner.style.transform = `translate(${clientX}px, ${clientY}px)`;
    });
  }

  render() {
    return (
      <ThemeProvider theme={[variables].reduce((p, c) => Object.assign(p, c))}>
        <div>
          <RebootStyle />
          <GlobalStyle theme={variables} backgroundColor={this.props.backgroundColor} />
          <CursorInner ref={this.cursorInnerRef} hide={this.props.isLoading} />
          <CursorOuter ref={this.cursorOuterRef} hide={this.props.isLoading} />
          {this.props.children}
        </div>
      </ThemeProvider>
    );
  }
}

export default Layout;
