import React, { useEffect } from 'react';
import { useState } from 'react';

import styles from './Nav.module.css';

import { AiOutlineMenu } from 'react-icons/ai';

const Nav = (props) => {
  const [toggleMenu, setToggleMenu] = useState('closed');
  console.log(toggleMenu);

  useEffect(() => {
    setToggleMenu('closed');
  }, [props.closeBtn]);

  const openMenu = () => {
    props.setMenu('menu');
    setToggleMenu('opened');
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
          </div>

          <li className={styles.menuItem} onClick={openMenu}>
            MENU <AiOutlineMenu />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
