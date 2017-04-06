import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import classnames from 'classnames';
import * as icons from '../../components/MaterialIcons/MaterialIcons.scss';
import * as css from './Icon.scss';
import iconTypes from './iconTypes';

class Icon extends React.Component {
  static propTypes = {
    icon: PropTypes.oneOf(iconTypes).isRequired,
    color: PropTypes.oneOf(['red', 'white', 'green', 'black', 'yellow']),
    className: PropTypes.string,
    size: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large']).isRequired,
  };

  static defaultProps = {
    size: 'medium',
    className: '',
  };

  render() {
    const { icon, color, size, className } = this.props;

    const root = classnames(className, icons.materialIcons, css[size], css[color]);

    return (
      <i className={root}>{icon}</i>
    );
  }
}

export default withStyles(css, icons)(Icon);
export { iconTypes };
