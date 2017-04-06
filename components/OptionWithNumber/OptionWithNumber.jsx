import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './OptionWithNumber.scss';

class OptionWithNumber extends React.Component {

  static propTypes = {
    item: PropTypes.shape({
      number: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]),
      label: PropTypes.string.isRequired,
    }).isRequired,
  };

  static defaultProps = {
    number: '',
  };

  render() {
    const { item: { label, number } } = this.props;

    return (
      <div className={s.root}>
        {label}
        {number && <span className={s.number}>{number}</span>}
      </div>
    );
  }
}

export default withStyles(s)(OptionWithNumber);
