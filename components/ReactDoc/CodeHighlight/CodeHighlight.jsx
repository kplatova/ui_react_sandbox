'use strict';

import React, { PropTypes } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNightEighties } from 'react-syntax-highlighter/dist/styles';

class CodeHighlight extends React.Component {

    static propTypes = {
        language: PropTypes.string,
        source: PropTypes.string.isRequired,
    };

    render() {
        return (
            <SyntaxHighlighter language={this.props.language} style={tomorrowNightEighties}>
                {this.props.source}
            </SyntaxHighlighter>
        );
    }
}

export default CodeHighlight;
