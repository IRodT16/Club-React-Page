import React from 'react';
import styles from './Menu.module.css';

const Menu = (props) => {
  const aboutPage = () => {
    props.setPath('about');
    props.setMenu('closed');
    props.closeTrigger();
  };
  const racingPage = () => {
    props.setPath('racing');
    props.setMenu('closed');
    props.closeTrigger();
  };
  const regattaPage = () => {
    props.setPath('regatta');
    props.setMenu('closed');
    props.closeTrigger();
  };
  const resultsPage = () => {
    props.setPath('results');
    props.setMenu('closed');
    props.closeTrigger();
  };
  const calendarPage = () => {
    props.setPath('calendar');
    props.setMenu('closed');
    props.closeTrigger();
  };
  const weatherPage = () => {
    props.setPath('weather');
    props.setMenu('closed');
    props.closeTrigger();
  };
  const membershipPage = () => {
    props.setPath('membership');
    props.setMenu('closed');
    props.closeTrigger();
  };

  return (
    <div className={styles.menuContainer}>
      <div className={styles.overlay}></div>
      <div className={styles.dropdownMenu}>
        <ul className={styles.menu}>
          <li className={styles.menuItem} onClick={aboutPage}>
            About
          </li>
          <li className={styles.menuItem} onClick={racingPage}>
            Racing
          </li>
          <li className={styles.menuItem} onClick={regattaPage}>
            Regattas
          </li>
          <li className={styles.menuItem} onClick={resultsPage}>
            Results
          </li>
          <li className={styles.menuItem} onClick={calendarPage}>
            Calendar
          </li>
          <li className={styles.menuItem} onClick={weatherPage}>
            Weather
          </li>
          <li className={styles.menuItem} onClick={membershipPage}>
            Membership
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
