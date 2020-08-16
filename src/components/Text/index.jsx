import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

const text = ({ value }) => <div className={styles.text}>{value}</div>;

text.propTypes = {
  value: PropTypes.string,
};

text.defaultProps = {
  value: '',
};

export default text;
