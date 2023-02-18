import React from 'react';
import { useState } from 'react';

import styles from './Body.module.css';

import Nav from '../Header/Nav';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Menu from '../Header/Menu';
import About from '../Pages/About/About';
import Racing from '../Pages/Racing/Racing';
import Regatta from '../Pages/Regattas/Regatta';
import Results from '../Pages/Results/Results';
import Calendar from '../Pages/Calendar/Calendar';
import Weather from '../Pages/Weather/Weather';
import Membership from '../Pages/Membership/Membership';

export const Body = () => {
  const [path, setPath] = useState('about');
  const [menu, setMenu] = useState();
  const [closeBtn, setCloseBtn] = useState(1);

  const closeTrigger = () => {
    setCloseBtn((i) => i + 1);
    console.log(closeBtn);
  };

  return (
    <div className={styles.body}>
      <Nav setMenu={setMenu} menu={menu} closeBtn={closeBtn} />

      <Main />
      {menu === 'menu' && (
        <Menu setPath={setPath} setMenu={setMenu} closeTrigger={closeTrigger} />
      )}
      {path === 'about' && <About />}
      {path === 'racing' && <Racing />}
      {path === 'regatta' && <Regatta />}
      {path === 'results' && <Results />}
      {path === 'calendar' && <Calendar />}
      {path === 'weather' && <Weather />}
      {path === 'membership' && <Membership />}
      <Footer />
    </div>
  );
};

export default Body;
