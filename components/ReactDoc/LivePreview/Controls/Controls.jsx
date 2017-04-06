import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Control from '../Control';
import {updateProps} from '../../../../../actions/component';

class Controls extends Component {

    static propTypes = {
        componentName: PropTypes.string.isRequired,
        componentDoc: PropTypes.object.isRequired,
        componentStates: PropTypes.object,
        updateProps: PropTypes.func,
    };

    constructor(props, context) {
        super(props, context);

        this.handleControlChanges = this.handleControlChanges.bind(this);
    }

    handleControlChanges({name, value}) {
        const {componentName} = this.props;

        this.props.updateProps({
            componentName: componentName,
            componentProps: {[name]: value},
        });
    }

    render() {
        const {componentDoc} = this.props;
        const propDocList = Object.keys(componentDoc.props).map((key) => {
            return Object.assign({}, componentDoc.props[key], {name: key});
        });

        const controls = propDocList.map((prop) => {
            return (
                <Control
                    key={prop.name}
                    propName={prop.name}
                    propType={prop.type.name}
                    onChange={this.handleControlChanges}
                />
            );
        });

        return (
            <div>
                {controls}
            </div>
        );
    }

}

export default connect(null, {updateProps})(Controls);
