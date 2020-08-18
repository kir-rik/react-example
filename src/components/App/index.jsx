import React from 'react';
import Text from '../Text';

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.counter = 0;

    this.state = {
      text: 'constructor',
    };
  }

  componentDidMount() {
    this.counter++;
    console.log('componentDidMount', this.counter);
    // this.setState(() => ({ text: 'afterDidMount' }));
  }

  render() {
    const { text } = this.state;

    return (
      <div>
        <Text value={text} />
        <Text value={this.counter} />
      </div>
    );
  }
}
