import React from 'react';
import styles from './Loading.module.css';

export const Loading: React.FC = () => {
  return (
    <div className={styles.container} id="loading">
      <div className={styles.content}>
        <div className={styles.spinner}></div>
        <div className={styles.text}>Loading...</div>
        <div id="placeholder"></div>
      </div>
    </div>
  );
};

export default Loading;