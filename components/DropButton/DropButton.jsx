/* eslint-disable react/no-find-dom-node */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import ReactDOM from 'react-dom';
import * as s from './DropButton.scss';
import Button from '../Button';
import OptionsList from '../OptionsList';

class DropButton extends React.Component {

  static propTypes = {
    /**
     *  текст на кнопке
     */
    text: PropTypes.string.isRequired,
    onClickSuggest: PropTypes.func.isRequired,
    onClickButton: PropTypes.func,
    /**
     *  массив для саджеста
     */
    options: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]),
      label: PropTypes.string.isRequired,
      number: PropTypes.number,
    })),
    name: PropTypes.string,
    /**
     *  функция, которая принимает item -- элемент массива и рендрит jsx
     */
    template: PropTypes.func,
  };

  static defaultProps = {
    name: 'dropbutton',
    onClickButton: () => {},
  };

  state = {
    isOpen: false,
  };

  componentDidMount() {
    this.mounted = true;
    document.addEventListener('click', this.handleDocumentClick, false);
    document.addEventListener('touchend', this.handleDocumentClick, false);
  }

  componentWillUnmount() {
    this.mounted = false;
    document.removeEventListener('click', this.handleDocumentClick, false);
    document.removeEventListener('touchend', this.handleDocumentClick, false);
  }

  handleDocumentClick = () => {
    if (this.mounted) {
      if (!ReactDOM.findDOMNode(this).contains(event.target)) {
        this.setState({ isOpen: false });
      }
    }
  };

  handleSuggestClick = (option) => {
    const { name, onClickSuggest } = this.props;

    this.setState({
      isOpen: !this.state.isOpen,
    });
    onClickSuggest({
      value: option.item,
      name,
      event: option.event,
    });
  };

  handleButtonClick = (event) => {
    const { name, text, onClickButton } = this.props;

    this.setState({
      isOpen: !this.state.isOpen,
    });

    onClickButton({
      value: text,
      name,
      event,
    });
  };

  render() {
    const { options, template, text } = this.props;

    return (
      <div className={s.root}>
        <Button
          onClick={this.handleButtonClick}
          text={text}
          type="flat"
        />
        <OptionsList
          options={options}
          template={template}
          visible={this.state.isOpen}
          onClick={this.handleSuggestClick}
          className={s.suggest}
        />
      </div>
    );
  }
}

export default withStyles(s)(DropButton);
