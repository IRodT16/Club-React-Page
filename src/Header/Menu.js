import React from 'react';
import styles from './Menu.module.css';

const Menu = (props) => {
  const aboutPage = () => {
    props.setPath('about');
    props.setMenu('closed');
  };
  const racingPage = () => {
    props.setPath('racing');
  };
  const regattaPage = () => {
    props.setPath('regatta');
  };
  const resultsPage = () => {
    props.setPath('results');
  };
  const calendarPage = () => {
    props.setPath('calendar');
  };
  const weatherPage = () => {
    props.setPath('weather');
  };
  const membershipPage = () => {
    props.setPath('membership');
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
