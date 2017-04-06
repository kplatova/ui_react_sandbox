import React, {Component, PropTypes} from 'react';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import styles from './Control.scss';

const TYPE_MAP = {
    'node': 'text',
    'string': 'text',
    'bool': 'checkbox',
};

class Control extends Component {

    static propTypes = {
        propName: PropTypes.string.isRequired,
        propType: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
    };

    constructor(props, context) {
        super(props, context);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const {onChange, propType} = this.props;
        const {name, checked} = event.target;
        let {value} = event.target;

        if (propType === 'bool') {
            value = checked;
        }

        onChange({name, value});
    }

    render() {
        const {propName, propType} = this.props;
        const type = TYPE_MAP[propType];

        if (!type) {
            return null;
        }

        return (
            <div className={styles.container}>
                <div className={styles.label}>
                    <label>{propName}</label>
                </div>
                <div className={styles.input}>
                    <input
                        type={type}
                        name={propName}
                        onChange={this.handleChange}
                    />
                </div>
            </div>
        );
    }

}

export default withStyles(styles)(Control);