import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import classnames from 'classnames';
import * as s from './OptionsList.scss';
import OptionWrap from './OptionWrap';

class OptionsList extends React.Component {

  static propTypes = {
    className: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]),
      label: PropTypes.string.isRequired,
    })),
    visible: PropTypes.bool,
    template: PropTypes.func,
    onClick: PropTypes.func.isRequired,
  };

  static defaultProps = {
    className: '',
  };

  render() {
    const { options, visible, className, template, onClick } = this.props;
    const root = classnames(className, s.root);

    if (!visible) {
      return null;
    }

    return (
      <ul className={root}>
        {options.map(item => <OptionWrap template={template} item={item} onClick={onClick} key={item.value} />)}
      </ul>
    );
  }
}

export default withStyles(s)(OptionsList);
