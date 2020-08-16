import React from 'react';
import PropTypes from 'prop-types';

const button = ({ handleClick, title }) => <button onClick={handleClick}>{title}</button>;

button.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string,
};

button.defaultProps = {
  onClick: () => {},
  title: '',
};

export default button;
