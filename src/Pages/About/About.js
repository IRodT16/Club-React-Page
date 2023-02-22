import styles from './About.module.css';

import Gallery from './Gallery.js';

function About() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.slider}>
        <Gallery />
      </div>
      <div className={styles.description}>
        <p>
          Located in Sanford's downtown historic district, LMSA is central
          Florida's most active Sailing Club! <br></br>LMSA hosts a variety of
          sailing events and races throughout the year. From fun cruises around
          the lake, to intese one-design fleet racing, LMSA has it all!{' '}
        </p>
      </div>
    </div>
  );
}

export default About;
