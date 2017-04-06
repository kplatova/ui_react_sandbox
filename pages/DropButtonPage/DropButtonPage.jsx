import React from 'react';
import PropsDoc from '../../components/ReactDoc/PropsDoc';
import CodeExample from '../../components/ReactDoc/CodeExample';
import DropButton from '../../components/DropButton';
import OptionWithNumber from '../../components/OptionWithNumber';

export default class DropdownPage extends React.Component {

  state = {
    options: [
      { label: 'One', value: 1, number: 14 },
      { label: 'Two', value: 2, number: 88 },
      { label: 'Three', value: 3 },
      { label: 'Four', value: 4 },
    ],
  };

  render() {
    return (
      <div>
        <br />
        <PropsDoc component={DropButton} />
        <br />
        <CodeExample>
          <DropButton
            template={(item) => <OptionWithNumber item={item} />}
            text={'Я хочу чтобы ты кликнул, сможешь?'}
            onClickSuggest={(v) => console.log('===value===', v)}
            options={this.state.options}
          />
        </CodeExample>
      </div>
    );
  }
}
