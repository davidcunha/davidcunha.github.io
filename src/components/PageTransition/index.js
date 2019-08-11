import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { PageTransitionWrapper, TransitionLayer } from './styles';

class PageTransition extends PureComponent {
  static propTypes = {
    currentRef: PropTypes.object,
  };

  render() {
    return (
      <PageTransitionWrapper ref={this.props.currentRef}>
        <TransitionLayer />
        <TransitionLayer />
        <TransitionLayer />
      </PageTransitionWrapper>
    );
  }
}

export default PageTransition;
