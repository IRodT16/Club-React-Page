import React from 'react';
import styles from './Main.module.css';

export const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.titleBox}>
        <div className={styles.title}>LAKE MONROE</div>

        <div className={styles.title}>SAILING ASSOCIATION</div>
      </div>
    </div>
  );
};

export default Main;
