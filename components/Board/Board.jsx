import React, { PropTypes } from 'react';
import classnames from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import * as s from './Board.scss';

class Board extends React.Component {

  static propTypes = {
    color: PropTypes.string,
    children: PropTypes.node,
  };

  static defaultProps = {
    color: 'white',
  };

  render() {
    const { color, children } = this.props;

    const className = classnames(s.root, s[color]);

    return (
      <div className={className}>
        {children}
      </div>
    );
  }
}

export default withStyles(s)(Board);
