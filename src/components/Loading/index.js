import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Spinner from './styles';

class Loading extends PureComponent {
  static propTypes = {
    currentRef: PropTypes.object,
  };

  render() {
    return <Spinner ref={this.props.currentRef} />;
  }
}

export default Loading;
