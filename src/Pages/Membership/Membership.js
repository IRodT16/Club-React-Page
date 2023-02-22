import styles from './Membership.module.css';
import { CreditCard, PaymentForm } from 'react-square-web-payments-sdk';

function Membership() {
  return (
    <div className={styles.generic}>
      <h1>Membership</h1>
      <PaymentForm
        applicationId="sandbox-sq0idb-3juiGVOItNa91BELKATo-w"
        cardTokenizeResponseReceived={(token, verifiedBuyer) => {
          console.log('token:', token);
          console.log('verifiedBuyer:', verifiedBuyer);
        }}
        locationId="XXXXXXXXXX"
      >
        <CreditCard />
      </PaymentForm>
    </div>
  );
}

export default Membership;
