/* eslint-disable react/no-find-dom-node, arrow-body-style */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import * as s from './Dropdown.scss';
import OptionsList from '../OptionsList';

class Dropdown extends React.Component {

  static propTypes = {
    onChange: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    options: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })),
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    template: PropTypes.func,
  };

  static defaultProps = {
    disabled: false,
    name: 'dropdown',
  };

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      label: this.getSelectedLabel(props.value),
    };
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.mounted = true;
    document.addEventListener('click', this.handleDocumentClick, false);
    document.addEventListener('touchend', this.handleDocumentClick, false);
  }

  componentWillReceiveProps(newProps) {
    this.setState({ label: this.getSelectedLabel(newProps.value) });
  }

  componentWillUnmount() {
    this.mounted = false;
    document.removeEventListener('click', this.handleDocumentClick, false);
    document.removeEventListener('touchend', this.handleDocumentClick, false);
  }


  getSelectedLabel(value) {
    const { options } = this.props;
    let selected = '';

    if (value) {
      selected = options.find(v => v.value === value).label;
    }

    return selected;
  }

  setValue = (option) => {
    this.setState({ isOpen: false });
    const { name } = this.props;
    this.props.onChange({
      value: option.item,
      name,
      event: option.event,
    });
  };

  handleDocumentClick(event) {
    if (this.mounted) {
      if (!ReactDOM.findDOMNode(this).contains(event.target)) {
        this.setState({ isOpen: false });
      }
    }
  }

  handleClick(event) {
    event.preventDefault();

    if (!this.props.disabled) {
      this.setState({
        isOpen: !this.state.isOpen,
      });
    }
  }

  render() {
    const { label, options, template } = this.props;
    const { isOpen } = this.state;
    const dropdownClass = classnames(s.dropdown, {
      [s.isOpen]: this.state.isOpen,
    });

    return (
      <div className={s.root}>
        {label && <div className={s.label}>{label}</div>}
        <div className={dropdownClass}>
          <button
            onClick={this.handleClick}
            className={s.value}
          >
            { this.state.label }
            <span className={s.arrow} />
          </button>
          <OptionsList
            options={options}
            template={template}
            visible={isOpen}
            onClick={this.setValue}
            className={s.suggest}
          />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Dropdown);
