import styles from './About.module.css';

function About() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.description}>About Page</div>
      <div className={styles.slider}></div>
    </div>
  );
}

export default About;
