import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import * as s from './OptionWrap.scss';

class OptionWrap extends React.Component {

  static propTypes = {
    item: PropTypes.shape({
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]),
      label: PropTypes.string.isRequired,
    }).isRequired,
    onClick: PropTypes.func.isRequired,
    template: PropTypes.func,
  };

  static defaultProps = {
    className: '',
  };

  handleClick= (event) => {
    const { onClick, item } = this.props;

    onClick({
      item,
      event,
    });
  };

  render() {
    const { template, item } = this.props;

    return (
      <li
        key={item.value}
      >
        <button
          className={s.button}
          onClick={this.handleClick}
        >
          {template ? template(item) : item.label}
        </button>
      </li>
    );
  }

}

export default withStyles(s)(OptionWrap);
