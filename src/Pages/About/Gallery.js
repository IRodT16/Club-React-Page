import styles from './Gallery.module.css';
import SimpleImageSlider from 'react-simple-image-slider';

import img1 from '../../Gallery/spinnaker.png';
import img2 from '../../Gallery/cat22.jpg';
import img3 from '../../Gallery/slider-1.png';
import img4 from '../../Gallery/slider-2.png';
import img5 from '../../Gallery/slider-3.png';
import img6 from '../../Gallery/heel-sail.png';

const images = [
  { url: img1 },
  { url: img2 },
  { url: img3 },
  { url: img4 },
  { url: img5 },
  { url: img6 },
];

function Gallery() {
  return (
    <div className={styles.galleryContainer}>
      <SimpleImageSlider
        width={500}
        height={270}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        slideDuration={1}
        autoPlayDelay={6.0}
      />
    </div>
  );
}

export default Gallery;
