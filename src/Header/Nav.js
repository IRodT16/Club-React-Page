import React from 'react';
import { useState } from 'react';

import styles from './Nav.module.css';

const Nav = (props) => {
  const [toggleMenu, setToggleMenu] = useState('closed');

  const openMenu = () => {
    props.setPath('menu');
    setToggleMenu('opened');
  };

  const closeMenu = () => {
    props.setPath('main');
    setToggleMenu('closed');
  };
  return (
    <div className={styles.menuOpen}>
      <div className={styles.navbar}>
        <ul className={styles.menu}>
          <div className={styles.navLeft}>
            <li className={styles.logo}></li>
            <li className={styles.mainTitle}>
              LAKE MONROE SAILING ASSOCIATION
            </li>
            {/* <li className={styles.mainTitle}>Lake Monroe Sailing Association</li> */}
          </div>

          {toggleMenu === 'closed' && (
            <li className={styles.menuItem} onClick={openMenu}>
              MENU
            </li>
          )}
          {toggleMenu === 'opened' && (
            <li className={styles.menuItem} onClick={closeMenu}>
              CLOSE
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
