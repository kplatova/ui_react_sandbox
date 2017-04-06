import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import * as s from './IconPresenter.scss';
import Icon from '../../../../sj/components/Icon';

class IconPresenter extends React.Component {
  static propTypes = {
    icon: PropTypes.string,
    color: PropTypes.string,
  };

  render() {
    const { icon, color } = this.props;

    return (
      <span className={s.root}>
        <Icon icon={icon} color={color} />
        <div className={s.iconName}>{icon}</div>
      </span>
    );
  }
}

export default withStyles(s)(IconPresenter);
