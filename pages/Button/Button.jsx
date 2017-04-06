import React from 'react';
import Button from '../../../sj/components/Button';
import CodeExample from '../../components/ReactDoc/CodeExample';
import PropsDoc from '../../components/ReactDoc/PropsDoc';
import LivePreview from '../../components/ReactDoc/LivePreview';

export default class ButtonPage extends React.Component {

  render() {
    return (
      <div>
        <h1>Button</h1>
        <div>
          <PropsDoc component={Button} />
          <CodeExample>
            <Button text="primary" icon="delete" />
          </CodeExample>
          <CodeExample>
            <Button type="secondary" text="secondary" />
          </CodeExample>
          <CodeExample>
            <Button type="secondary" danger text="secondary danger" />
          </CodeExample>
          <CodeExample>
            <Button disabled text="primary" />
          </CodeExample>
          <CodeExample>
            <Button disabled type="secondary" text="secondary" />
          </CodeExample>
          <CodeExample>
            <Button disabled type="secondary" danger text="secondary danger" />
          </CodeExample>
        </div>
        <div>
          <LivePreview component={Button} />
        </div>
      </div>
    );
  }
}
