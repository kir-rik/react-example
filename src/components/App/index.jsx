import React from 'react';
import ObjectView from '../ObjectView';
import Button from '../Button';

export default class App extends React.PureComponent {
  state = {
    data: {
      a: 1,
      b: 2,
      c: 3,
    },
  };

  handleClick = () =>
    this.setState((state, props) => {
      return {
        data: {
          ...state.data,
          d: (state.data.d || state.data.c) + 1,
        },
      };
    });

  render() {
    const { data } = this.state;

    return (
      <main>
        <ObjectView data={data} />
        <Button title="Какая-то кнопка" handleClick={this.handleClick} />
      </main>
    );
  }
}
