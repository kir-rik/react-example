import React from 'react';
import Text from '../Text';
import Button from '../Button';

export default () => (
  <main>
    <Text value='Какой-то текст'/>
    <Button title="Какая-то кнопка" handleClick={() => console.log('Клац')}/>
  </main>
);
