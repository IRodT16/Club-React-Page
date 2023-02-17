import styles from './Footer.module.css';
import Sponsor from '../Main/Sponsors';

function Footer() {
  return (
    <div className={styles.footer}>
      <Sponsor />
    </div>
  );
}

export default Footer;
