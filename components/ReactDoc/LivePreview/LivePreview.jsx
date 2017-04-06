import React, {Component, PropTypes} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Controls from './Controls';
import Preview from './Preview';
import styles from './LivePreview.scss';
import {getDocgenInfo, getDisplayName} from '../util';

class LivePreview extends Component {

    static propTypes = {
        component: PropTypes.func.isRequired,
    };

    render() {
        const {component} = this.props;
        const componentName = getDisplayName(component);
        const componentDoc = getDocgenInfo(component);

        return (
            <div className={styles.container}>
                <h1>LivePreview {componentName}</h1>
                <div className={styles.controls}>
                    <Controls
                        componentName={componentName}
                        componentDoc={componentDoc}
                    />
                </div>
                <div className={styles.preview}>
                    <Preview
                        componentName={componentName}
                        component={component}
                    />
                </div>
            </div>
        );
    }

}

export default withStyles(styles)(LivePreview);
