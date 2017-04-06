import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Slider.scss';

class Slider extends React.Component {

  static propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    value: PropTypes.number.isRequired,
  };

  static defaultProps = {
    min: 0,
    max: 100,
    value: 10,
  };

  render() {
    const { min, max, value } = this.props;
    const range = max - min;
    const percentage = ((value - min) * 100) / range;

    const sliderStyle = {
      width: `${percentage}%`,
    };

    const toggleStyle = {
      marginLeft: `${percentage}%`,
    };

    return (
      <div className={s.root} tabIndex="0">
        <div className={s.toggle} style={toggleStyle} />
        <div className={s.filledLine} style={sliderStyle} />
        <div className={s.line} />
      </div>
    );
  }
}

export default withStyles(s)(Slider);
