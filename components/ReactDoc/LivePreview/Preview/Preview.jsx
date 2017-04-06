import React, {Component, PropTypes} from 'react';
import CodeExample from '../../CodeExample/CodeExample';
import {connect} from 'react-redux';

class Preview extends Component {

    static propTypes = {
        componentName: PropTypes.string.isRequired,
        component: PropTypes.func.isRequired,
        componentStates: PropTypes.object,
    };

    constructor(props, context) {
        super(props, context);

        this.getPropsForComponent = this.getPropsForComponent.bind(this);
    }

    getPropsForComponent() {
        const {componentStates, componentName} = this.props;
        return componentStates[componentName];
    }

    render() {
        const {component} = this.props;
        const propsForComponent = this.getPropsForComponent();

        const Tag = component;

        return (
            <CodeExample>
                <Tag {...propsForComponent} />
            </CodeExample>
        );
    }
}

const mapStateToProps = (state) => {
    return {componentStates: state.component};
};

export default connect(mapStateToProps)(Preview);
