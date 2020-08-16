import React from "react";
import PropTypes from 'prop-types';
import styles from './styles'

const helloWorld = ({ multiverse }) => <div className={styles.text}>{`Hello World${multiverse ? 's' : ''}!`}</div>;

helloWorld.propTypes = {
    multiverse: PropTypes.bool
}

helloWorld.defaultProps = {
    multiverse: false
}


export default helloWorld