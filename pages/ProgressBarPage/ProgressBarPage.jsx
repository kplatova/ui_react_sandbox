import React from 'react';
import ProgressBar from '../../../sj/components/ProgressBar';
import CodeExample from '../../components/ReactDoc/CodeExample';
import PropsDoc from '../../components/ReactDoc/PropsDoc';
import LivePreview from '../../components/ReactDoc/LivePreview';

export default class ProgressBarPage extends React.Component {

  render() {
    return (
      <div>
        <h1>Прогресс-бар</h1>
        <div>
          <PropsDoc component={ProgressBar} />
          <CodeExample>
            <ProgressBar />
          </CodeExample>
        </div>
        <div>
          <LivePreview component={ProgressBar} />
        </div>
      </div>
    );
  }
}
