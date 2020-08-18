import React from 'react';
import Text from '../Text';
import Button from '../Button';

export default class App extends React.PureComponent {
  state = {
    value: 0,
  };

  handleClick = () =>
    this.setState((state, props) => {
      return {
        value: state.value + 1,
      };
    });

  // static getDerivedStateFromProps(props, state) {
  //   console.log('%c%s', 'background-color: yellow', `Before every render. State: ${JSON.stringify(state)}`);
  //   return null;
  //   // return state.value > 5
  //   //   ? {
  //   //       value: 42,
  //   //     }
  //   //   : null;
  // }

  // componentDidMount() {
  //   console.log('%c%s', 'background-color: orange', `After initial render. State: ${JSON.stringify(this.state)}`);
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log('%c%s', 'background-color: #00CED1', `After non-initial render. ${prevState.value} -> ${this.state.value}`);
  // }

  render() {
    console.log('%c%s', 'background-color: #F0FFF0', `Render. State: ${JSON.stringify(this.state)}`);
  

    const { value } = this.state;

    return (
      <main>
        <Text value={`Какой-то текст ${value}`} />
        <Button title="Какая-то кнопка" handleClick={this.handleClick} />
      </main>
    );
  }
}
