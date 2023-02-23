import styles from './Page.module.css';
import ApiCalendar from 'react-google-calendar-api';
import CalendarComponent from 'react-calendar';

function Calendar() {
  return (
    <div className={styles.generic}>
      <CalendarComponent />
    </div>
  );
}

export default Calendar;
