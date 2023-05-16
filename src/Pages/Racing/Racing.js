import styles from './Racing.module.css';
import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';

import wedImage from './oleyeller.png';
import clubImage from './club-race.png';
import jamesonImage from './jameson-race.png';

function Racing() {
  const [racingTabs, setRacingTabs] = useState('club');

  const clubHelper = () => {
    setRacingTabs('club');
  };
  const wedHelper = () => {
    setRacingTabs('wed');
  };
  const jamesonHelper = () => {
    setRacingTabs('jameson');
  };

  return (
    <container className={styles.racingContainer}>
      <div className={styles.tabs}>
        <p
          className={racingTabs === 'club' ? styles.activeTab : styles.tab}
          onClick={clubHelper}
        >
          Club Racing
        </p>
        <button
          className={racingTabs === 'wed' ? styles.activeTab : styles.tab}
          onClick={wedHelper}
        >
          Wednesday Night Series
        </button>
        <p
          className={racingTabs === 'jameson' ? styles.activeTab : styles.tab}
          onClick={jamesonHelper}
        >
          Jameson Racing
        </p>
      </div>

      <div className={styles.content}>
        {racingTabs === 'club' && (
          <container>
            <div className={styles.subcontent}>
              <p className={styles.text}>
                LMSA's annual Club Series is our most competitive event for
                Members. Club races take place one Saturday each month, and
                feature a Windward Leeward course that is officiated by a Race
                Committee. Boats will compete in multiple Windward Leeward races
                during each Club Race. Winners are announced for the day,
                however this is an annual event, so scores are accumulated each
                month. With the overall winner at the end of the year, becoming
                the recipient of the coveted Hayden Cup trophy.
              </p>
              <img alt="sailboat" src={clubImage} className={styles.img}></img>
            </div>
          </container>
        )}

        {racingTabs === 'wed' && (
          <container>
            <div className={styles.subcontent}>
              <img alt="sailboat" src={wedImage} className={styles.img}></img>

              <p className={styles.text}>
                Sponsored by Malibu Rum, Rum Racing is the perfect opportunity
                for anyone new to come by and check us out! Rum Races take place
                every Wednesday evening during daylight-savings, with a race
                start window from 6:30 - 6:35. Be sure to drop by the clubhouse
                early to register. Rum races are open to everyone, memebers and
                non-members alike. No experience neccessary, so if you're new to
                sailing, drop by and we will find a boat for you to crew on and
                gladly show you the ropes. Afterwards, sailors meet at Henry's
                Depot in downtwon Sanford to grab a bite, something refreshing
                to drink, and announce the evenings scores.
              </p>
            </div>
          </container>
        )}

        {racingTabs === 'jameson' && (
          <container>
            <div className={styles.subcontent}>
              <p className={styles.text}>
                Sponsored by Jameson Irish Whiskey, Jameson races take place one
                Sunday each month, and feature a longer race course that gives
                sailors the opportunity to sail around different marks and areas
                of Lake Monroe. Race times vary depending on weather, but
                typically start in the early afternoon. Be sure to check out the
                club's Facebook page to see this Jameson's starting time. After
                the race, sailors meet up at Sanford Brewing in downtown Sanford
                to relax, eat, grab a cold drink and announce the scores.
              </p>
              <img
                alt="sailboat"
                src={jamesonImage}
                className={styles.img}
              ></img>
            </div>
          </container>
        )}
      </div>
    </container>
  );
}

export default Racing;
