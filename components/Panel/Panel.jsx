import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import * as s from './Panel.scss';

class Panel extends React.Component {

  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children } = this.props;

    return (
      <div className={s.root}>
        {children}
      </div>
    );
  }
}

export default withStyles(s)(Panel);
