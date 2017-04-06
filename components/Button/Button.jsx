import React, { PropTypes } from 'react';
import classnames from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import * as s from './Button.scss';
import Icon, { iconTypes } from '../../../sj/components/Icon';

class Button extends React.Component {

  static propTypes = {
    type: PropTypes.oneOf(['primary', 'secondary', 'flat', 'flatlight', 'minimal', 'minimallight']).isRequired,
    text: PropTypes.string,
    icon: PropTypes.oneOf(iconTypes),
    disabled: PropTypes.bool,
    danger: PropTypes.bool,
    fullWidth: PropTypes.bool,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    type: 'primary',
    onClick: () => {},
  };

  render() {
    const { icon, text, type, disabled, danger, fullWidth, onClick } = this.props;

    const className = classnames(s.root, s[type], {
      [s.danger]: danger,
      [s.disabled]: disabled,
      [s.fullWidth]: fullWidth,
    });

    return (
      <button className={className} onClick={onClick}>
        {icon && <Icon icon={icon} className={s.icon} />}
        {text}
      </button>
    );
  }
}

export default withStyles(s)(Button);
