import React from 'react';
import styles from './app.module.css';

export function App() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>10x10 Portfolio</h1>
        <p className={styles.subtitle}>
          A showcase of 10 projects built in 10 days, demonstrating technical skills and problem-solving abilities.
        </p>
        <button className={styles.button}>Explore Projects</button>
      </div>
    </div>
  );
}

export default App;
