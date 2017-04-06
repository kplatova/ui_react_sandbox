import React from 'react';
import PropsDoc from '../../components/ReactDoc/PropsDoc';
import CodeExample from '../../components/ReactDoc/CodeExample';
import Dropdown from '../../components/Dropdown';

export default class DropdownPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      options1: [
        { value: 'one', label: 'first item' },
        { value: 'two', label: 'second item' },
        { value: 'three', label: 'third item' },
      ],
      value1: '',
      options2: [
        { value: 'one', label: 'first item' },
        { value: 'two', label: 'second item very very long item with some text' },
        { value: 'three', label: 'third item' },
      ],
      value2: 'three',
    };
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
  }

  handleClick1({ value }) {
    this.setState({ value1: value.value });
  }

  handleClick2({ value }) {
    this.setState({ value2: value.value });
  }

  render() {
    const { options1, options2, value1, value2 } = this.state;

    return (
      <div>
        <h1>Дропдаун</h1>
        <br />
        <PropsDoc component={Dropdown} />
        <br />
        <CodeExample
          description={'Дропдаун без выбранного элемента'}
          withBorder
        >
          <Dropdown
            options={options1}
            label="label"
            value={value1}
            onChange={this.handleClick1}
          />
        </CodeExample>
        <br />
        <CodeExample
          description={'Дропдаун с дефолтным значением'}
          withBorder
        >
          <Dropdown
            options={options2}
            value={value2}
            onChange={this.handleClick2}
          />
        </CodeExample>
      </div>
    );
  }
}
