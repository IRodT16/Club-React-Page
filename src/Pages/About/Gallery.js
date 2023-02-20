import styles from './Gallery.module.css';

function Gallery() {
  return (
    <div className={styles.galleryContainer}>
      <img
        class="slider-img slide-active"
        src="img/cat22.jpg"
        alt="Catalina 22 Rounding a Mark"
      />

      <img
        class="slider-img"
        src="img/lightning-sail-1.png"
        alt="Lightning sailboats"
      />

      <img class="slider-img" src="img/spinnaker.png" alt="Spinnakers" />

      <img class="slider-img" src="img/heel-sail.png" alt="Boat heeling" />

      <img class="slider-img" src="img/slider-1.png" alt="Boat heeling" />

      <img class="slider-img" src="img/slider-2.png" alt="Boat heeling" />

      <img class="slider-img" src="img/slider-3.png" alt="Boat heeling" />

      <ion-icon
        class="arrow arrow--right"
        name="chevron-forward-outline"
      ></ion-icon>

      <ion-icon
        class="arrow arrow--left"
        name="chevron-back-outline"
      ></ion-icon>

      <div class="slider-nav">
        <div class="slider-dot active"></div>
        <div class="slider-dot"></div>
        <div class="slider-dot"></div>
        <div class="slider-dot"></div>
        <div class="slider-dot"></div>
        <div class="slider-dot"></div>
        <div class="slider-dot"></div>
      </div>
    </div>
  );
}

export default Gallery;
