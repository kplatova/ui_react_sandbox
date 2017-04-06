/* eslint no-underscore-dangle: "off" */
import React, {Component, PropTypes} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import styles from './PropsDoc.scss';
import {getDocgenInfo} from '../util';

const getPropType = (type) => {
    switch (type.name) {
        case 'enum': {
            if (type.computed) {
                return type.value;
            }

            return type.value.map((item) => item.value).join(', ');
        }
        default: {
            return type.name;
        }
    }
};

class PropsDoc extends Component {

    static propTypes = {
        component: PropTypes.func,
    };

    renderWarning() {
        return (
            <div>
                Нет документации
            </div>
        )
    }

    render() {
        const {component} = this.props;
        const componentDoc = getDocgenInfo(component);

        if (!componentDoc) {
            return this.renderWarning();
        }

        const propList = Object.keys(componentDoc.props).map((key) => {
            return Object.assign({}, componentDoc.props[key], {name: key});
        }).map((prop) => {
            return (
                <tr key={prop.name}>
                    <td>
                        <span className={styles.propName}>{prop.name}</span>
                        &nbsp;
                        {prop.required && <span className={styles.propRequired}>(required)</span>}
                    </td>
                    <td className={styles.propType}>{getPropType(prop.type)}</td>
                    <td>{prop.description}</td>
                </tr>
            );
        });

        return (
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Prop</th>
                        <th>Type</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {propList}
                </tbody>
            </table>
        );
    }

}

export default withStyles(styles)(PropsDoc);
