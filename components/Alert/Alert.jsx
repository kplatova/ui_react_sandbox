import React, { PropTypes } from 'react';
import classnames from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import * as s from './Alert.scss';
import * as icons from '../MaterialIcons/MaterialIcons.scss';

class Alert extends React.Component {

  static propTypes = {
    tailPosition: PropTypes.oneOf(['topLeft', 'topCenter', 'topRight', 'leftTop']).isRequired,
    text: PropTypes.string.isRequired,
    icon: PropTypes.string,
    bgColor: PropTypes.string,
    iconColor: PropTypes.string,
  };

  render() {
    const { text, icon, tailPosition, iconColor, bgColor } = this.props;

    const className = classnames(s.root, s[tailPosition], s[bgColor]);

    return (
      <div className={className}>
        {icon && <i className={icons.materialIcons} color={iconColor}>{icon}</i>} {text}
      </div>
    );
  }
}

export default withStyles(s, icons)(Alert);
