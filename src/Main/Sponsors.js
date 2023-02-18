import React from 'react';
import styles from './Sponsors.module.css';

export const Sponsors = () => {
  return (
    <div className={styles.sponsorContainer}>
      <img
        className={styles.vudu}
        src="../../img/sponsors/vudulogo.png"
        alt="vudu wave logo"
      />
      <img
        className={styles.sponsor}
        src="../../img/sponsors/usail.png"
        alt="vudu wave logo"
      />

      <img
        className={styles.jameson}
        src="../../img/sponsors/jameson-logo.jpg"
        alt="vudu wave logo"
      />
      <img
        className={styles.reg}
        src="../../img/sponsors/reg-garner-logo-black.png"
        alt="vudu wave logo"
      />
      <img
        className={styles.sponsor}
        src="../../img/sponsors/sanford brewing.jpg"
        alt="vudu wave logo"
      />
    </div>
  );
};

export default Sponsors;
