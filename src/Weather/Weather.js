import React from 'react';
import styles from './Weather.module.css';

const options = {
  // Required: API key
  key: 'QbhAZx0YDpOGqyOdIi0eIasSRix05QWX', // REPLACE WITH YOUR KEY !!!

  // Put additional console output
  verbose: true,

  // Optional: Initial state of the map
  lat: 28.838258,
  lon: -81.267264,
  // zoom: 21,
};

const windy = async function () {
  let windyInit;
  let L;
  windyInit(options, (windyAPI) => {
    // windyAPI is ready, and contain 'map', 'store',
    // 'picker' and other usefull stuff

    const { map } = windyAPI;

    map.setView([28.838258, -81.267264], 14);
    // setZoom(17);
    // load();

    map.options.minZoom = 4;
    map.options.maxZoom = 17;

    var topLayer = L.tileLayer(
      'https://b.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        attribution:
          'Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, ',
        minZoom: 12,
        maxZoom: 17,
      }
    ).addTo(map);
    topLayer.setOpacity('0');

    map.on('zoomend', function () {
      if (map.getZoom() >= 12) {
        topLayer.setOpacity('.5');
      } else {
        topLayer.setOpacity('0');
      }
    });

    // map.setZoom(12.5);

    // L.marker([28.819167, -81.262017]).addTo(map).bindPopup('LMSA Ball');
    // L.marker([28.818717, -81.264567]).addTo(map).bindPopup('Flag');
    // L.marker([28.8355, -81.264]).addTo(map).bindPopup('Rum Mark');
    // L.marker([28.83, -81.2525]).addTo(map).bindPopup('Gosling');
    // L.marker([28.8214, -81.275133]).addTo(map).bindPopup('CM 12');
    // L.marker([28.847517, -81.2486]).addTo(map).bindPopup('Manatee 1');
    // L.marker([28.85335, -81.253533]).addTo(map).bindPopup('Manatee 2');
    // L.marker([28.825017, -81.281617]).addTo(map).bindPopup('CM 10');
    // L.marker([28.83135, -81.28655]).addTo(map).bindPopup('CM 8');
    // L.marker([28.816733, -81.242767]).addTo(map).bindPopup('CM 2');

    // var latlngs = [
    //   [28.819167, -81.262017],
    //   [28.83135, -81.28655],
    // ];
    // var polyline = L.polyline(latlngs, { color: 'red' }).addTo(map);
  });
};

windy();

const Weather = () => {
  return (
    <div>
      <script
        src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
        integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
        crossorigin=""
      ></script>

      <script src="https://unpkg.com/leaflet@1.4.0/dist/leaflet.js"></script>
      <script src="https://api.windy.com/assets/map-forecast/libBoot.js"></script>

      <section className={styles.weather} id="weather">
        <div class="weather-text">
          <h2 class="weather-heading">Current Wind and Course Marks</h2>
        </div>
        <div class="center">
          <div id="windy"></div>

          <div class="conditions"></div>
        </div>
      </section>
    </div>
  );
};

export default Weather;
