import React from 'react';
import styles from './Body.module.css';

import Nav from '../Header/Nav';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';

export const Body = () => {
  return (
    <div className={styles.body}>
      <Nav />
      <Main />
      <Footer />
    </div>
  );
};

export default Body;
