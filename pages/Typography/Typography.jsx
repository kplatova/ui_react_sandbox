import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import * as t from '../../../sj/components/Typography/Typography.scss';

class Typography extends React.Component {

  render() {
    return (
      <div>
        <h1>Типографика</h1>
        <h1 className={t.pageheader}>Pageheader, 32/1,25</h1>
        <h2 className={t.headline1}>Headline1, 23/1,22</h2>
        <h2 className={t.headline2}>Headline2, 23/1,39</h2>
        <h3 className={t.title}>Title, 19/1,47</h3>
        <h4 className={t.subheader1}>Subheader1, 16/1,25</h4>
        <h4 className={t.subheader2}>Subheader2, 16/1,5</h4>
        <p className={t.body}>Body, 13/1,23</p>
        <p className={t.caps}>Caps, 13/1,23 uppercase</p>
        <p className={t.caption}>Caption, 12/1,33</p>
      </div>
    );
  }
}

export default withStyles(t)(Typography);
