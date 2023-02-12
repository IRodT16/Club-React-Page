import React from 'react';
import styles from './Menu.module.css';

const Menu = () => {
  return (
    <div className={styles.menuContainer}>
      <div className={styles.overlay}></div>
      <div className={styles.dropdownMenu}>
        <ul className={styles.menu}>
          <li className={styles.menuItem}>About</li>
          <li className={styles.menuItem}>Racing</li>
          <li className={styles.menuItem}>Regattas</li>
          <li className={styles.menuItem}>Results</li>
          <li className={styles.menuItem}>Calendar</li>
          <li className={styles.menuItem}>Weather</li>
          <li className={styles.menuItem}>Membership</li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
