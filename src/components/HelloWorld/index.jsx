import React from "react";
import styles from './styles'

export default ({ multiverse }) => <div className={styles.text}>{`Hello World${multiverse ? 's' : ''}!`}</div>;
