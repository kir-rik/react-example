import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import Text from '../Text';

/* 
    Имитируем загрузку.
    Вместо ответов сервера 
      * setTimeout для таймаута
      * handleClick для завершения
*/


export default class Loader extends React.PureComponent {
  static propTypes = {
    handleClick: PropTypes.func.isRequired,
  };

  state = { text: 'Загружаем' };

  componentDidMount() {
    this.timerId = setTimeout(() => this.setState(() => ({ text: 'Долговато' })), 5 * 1000);
  }

  render() {
    const { handleClick } = this.props;
    const { text } = this.state;

    return (
      <>
        <Text value={text} />
        <Button handleClick={handleClick} title="Нажми меня" />
      </>
    );
  }
}
