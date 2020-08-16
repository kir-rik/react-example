import React from 'react';
import Text from '../Text';
import Button from '../Button';

export default class App extends React.PureComponent {
  state = {
    text1: 'Какой-то текст',
    text2: 'Какой-то другой текст',
    text3: 'Какой-то третий текст',
  };

  handleClick = () =>
    this.setState((state, props) => {
      return {
        text1: state.text1 + '1',
        text2: 'Поклацано',
      };
    });

  render() {
    const { text1, text2, text3 } = this.state;
  
    return (
      <main>
        <Text value={text1} />
        <Text value={text2} />
        <Text value={text3} />
        <Button title="Какая-то кнопка" handleClick={this.handleClick} />
      </main>
    );
  }
}
