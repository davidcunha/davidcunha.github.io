import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import PageWrapper from './styles';

class Page extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    currentRef: PropTypes.object,
  };

  render() {
    return <PageWrapper ref={this.props.currentRef}>{this.props.children}</PageWrapper>;
  }
}

export default Page;
