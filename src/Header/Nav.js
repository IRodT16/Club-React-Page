import React, { useEffect } from 'react';
import { useState } from 'react';

import styles from './Nav.module.css';

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Nav = (props) => {
  const [toggleMenu, setToggleMenu] = useState('closed');
  console.log(toggleMenu);

  useEffect(() => {
    setToggleMenu('closed');
    // if (props.closeBtn === 'opened') {
    //   setToggleMenu('opened');
    // } else if (props.closeBtn === 'closed') {
    //   setToggleMenu('closed');
    // }
  }, [props.closeBtn]);

  const openMenu = () => {
    props.setMenu('menu');
    setToggleMenu('opened');
  };

  const closeMenu = () => {
    props.setMenu('close');
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
          </div>

          {toggleMenu === 'closed' && (
            <li className={styles.menuItem} onClick={openMenu}>
              MENU <AiOutlineMenu />
            </li>
          )}
          {toggleMenu === 'opened' && (
            <li className={styles.menuItem} onClick={closeMenu}>
              CLOSE <AiOutlineClose />
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
