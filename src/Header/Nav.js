import React from 'react';
import styles from './Nav.module.css';

const Nav = () => {
  return (
    <div className={styles.navbar}>
      <ul className={styles.menu}>
        <li className={styles.logo}></li>
      </ul>
      <ul className={styles.menu}>
        {/* <li className={styles.logo}></li> */}
        <li className={styles.menuItem}>About</li>
        <li className={styles.menuItem}>Racing</li>
        <li className={styles.menuItem}>Regattas</li>
        <li className={styles.menuItem}>Results</li>
        <li className={styles.menuItem}>Calendar</li>
        <li className={styles.menuItem}>Weather</li>
        <li className={styles.menuItem}>Membership</li>
      </ul>
    </div>
  );
};

export default Nav;
