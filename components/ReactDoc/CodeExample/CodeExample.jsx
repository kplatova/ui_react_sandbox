import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import CodeHighlight from '../CodeHighlight';
import { getJSXString } from '../util';
import * as s from './CodeExample.scss';

class CodeExample extends Component {

  static propTypes = {
    description: PropTypes.string,
    withBorder: PropTypes.bool,
    withPadding: PropTypes.bool,
    showRulers: PropTypes.bool,
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    description: '',
    withBorder: false,
    withPadding: false,
    showRulers: false,
  };


  constructor(props) {
    super(props);
    this.state = {
      withPadding: props.withPadding,
      withBorder: props.withBorder,
      showRulers: props.showRulers,
    };
  }

  handleChangeCanvasView = ({ target }) => {
    const { checked, name } = target;

    this.setState({ [name]: checked });
  };


  render() {
    const { children, description } = this.props;
    const { withPadding, withBorder, showRulers } = this.state;

    const previewStyle = classnames(s.preview, {
      [s.previewBorder]: withBorder,
      [s.previewPadding]: withPadding,
      [s.showRulers]: showRulers && (withBorder || withPadding),
    });

    return (
      <div className={s.root}>
        {description &&
        <div className={s.description}>
          {description}
        </div>
                }
        <div className={s.codeContainer}>
          <div className={previewStyle}>
            {this.props.children}
          </div>
          <div className={s.code}>
            <CodeHighlight language="html" source={getJSXString(children)} />
          </div>
        </div>
        <div className={s.toolbar}>
          <label>
            <input
              type="checkbox" name="withPadding" checked={withPadding}
              onChange={this.handleChangeCanvasView}
            />
                        padding
                    </label>
          <label>
            <input
              type="checkbox" name="showRulers" checked={showRulers && (withPadding || withBorder)}
              disabled={!withPadding && !withBorder}
              onChange={this.handleChangeCanvasView}
            />
                        rulers
                    </label>
          <label>
            <input
              type="checkbox" name="withBorder" checked={withBorder}
              onChange={this.handleChangeCanvasView}
            />
                        border
                    </label>
        </div>
      </div>
    );
  }

}

export default withStyles(s)(CodeExample);
