import React from 'react';
import Text from '../Text';
import Loader from '../Loader';

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isLoadig: true,
    };
  }

  completeLoading = () => this.setState(() => ({ isLoadig: false }));

  render() {
    const { isLoadig } = this.state;

    return isLoadig ? <Loader handleClick={this.completeLoading} /> : <Text value="Загружено" />;
  }
}
