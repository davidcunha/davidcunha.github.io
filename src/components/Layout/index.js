import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { TimelineLite } from 'gsap';
import Loading from '../Loading';
import PageTransition from '../PageTransition';
import Page from '../Page';
import RebootStyle from '../../shared/reboot';
import GlobalStyle from '../../shared/globals';
import variables from '../../shared/variables';
import { CursorInner, CursorOuter } from './styles';

class Layout extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    backgroundColor: PropTypes.string,
    withLoading: PropTypes.bool,
  };

  static defaulProps = {
    backgroundColor: 'dark',
  };

  constructor(props) {
    super(props);

    if (props.withLoading) {
      this.loadingRef = React.createRef();
      this.pageTransitionRef = React.createRef();
      this.pageRef = React.createRef();
    }

    this.cursorInnerRef = React.createRef();
    this.cursorOuterRef = React.createRef();
  }

  componentDidMount() {
    if (this.props.withLoading) {
      const tl = new TimelineLite();
      tl.to(this.loadingRef.current, 0, { display: 'none', autoAlpha: 0 }, 5)
        .to(this.pageTransitionRef.current, 0, { display: 'block', autoAlpha: 1 })
        .to(this.pageRef.current, 0, { display: 'block', autoAlpha: 1 }, '+= 1')
        .play();
    }
    this.addMouseMoveListener();
  }

  addMouseMoveListener = () => {
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
  };

  render() {
    return (
      <ThemeProvider theme={[variables].reduce((p, c) => Object.assign(p, c))}>
        <div>
          <RebootStyle />
          <GlobalStyle theme={variables} backgroundColor={this.props.backgroundColor} />
          <CursorInner ref={this.cursorInnerRef} />
          <CursorOuter ref={this.cursorOuterRef} />
          {this.props.withLoading && (
            <>
              <Loading currentRef={this.loadingRef} />
              <PageTransition currentRef={this.pageTransitionRef} />
            </>
          )}
          <Page {...this.props.withLoading && { currentRef: this.pageRef }}>
            {this.props.children}
          </Page>
        </div>
      </ThemeProvider>
    );
  }
}

export default Layout;
