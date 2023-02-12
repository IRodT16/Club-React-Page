import React from 'react';
import { useState } from 'react';

import styles from './Body.module.css';

import Nav from '../Header/Nav';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Menu from '../Header/Menu';

export const Body = () => {
  const [path, setPath] = useState('main');
  return (
    <div className={styles.body}>
      <Nav setPath={setPath} path={path} />

      <Main />
      {path === 'menu' && <Menu />}
      <Footer />
    </div>
  );
};

export default Body;
