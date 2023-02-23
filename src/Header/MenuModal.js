import React from 'react';
import ReactDOM from 'react-dom';

import Menu from './Menu';
import styles from './MenuModal.module.css';

const MenuModal = (props) => {
  const test = (
    <section className={styles.wrapper}>
      <Menu
        setPath={props.setPath}
        setMenu={props.setMenu}
        closeTrigger={props.closeTrigger}
      />
    </section>
  );

  return ReactDOM.createPortal(test, document.querySelector('#menuModal'));
};

export default MenuModal;
