import { FC } from 'react';
import styles from './Compare.module.scss';
import Button from '@components/UI/Button/Button';

const Compare: FC = () => {
  return (
    <section className={styles.section}>
      <header className={styles.topbar}>
        <p className={styles.description}>Compare</p>
        <h2 className={styles.title}>Compare & get your plan</h2>
      </header>
      <div className={styles.content}>
        <div>
          <header className={styles.header}>
            <ul className={styles.list}>
              <li className={styles.item}>
                <h6>Individual</h6>
                <Button>Get for $39</Button>
              </li>
              <li className={styles.item}>
                <h6>Business</h6>
                <Button>Get for $49</Button>
              </li>
              <li className={styles.item}>
                <h6>Corporate</h6>
                <Button>Get for $199</Button>
              </li>
            </ul>
          </header>
          <table className={styles.table}>
            <caption>Service</caption>
            <tr>
              <td>Service</td>
              <td>1 Service</td>
              <td>2 Service</td>
              <td>3 Service</td>
            </tr>
            <tr>
              <td>Platform</td>
              <td>Free</td>
              <td>Free</td>
              <td>Free</td>
            </tr>
            <tr>
              <th>Website</th>
            </tr>
            <tr>
              <td>Custom Domain</td>
              <td></td>
              <td>&#10003;</td>
              <td>&#10003;</td>
            </tr>
            <tr>
              <td>Cloud Hosting</td>
              <td>&#10003;</td>
              <td>&#10003;</td>
              <td>&#10003;</td>
            </tr>
            <tr>
              <td>Export Codes</td>
              <td></td>
              <td>&#10003;</td>
              <td>&#10003;</td>
            </tr>
            <tr>
              <td>Live Preview</td>
              <td>&#10003;</td>
              <td>&#10003;</td>
              <td>&#10003;</td>
            </tr>
            <tr>
              <th>Email Marketing</th>
            </tr>
            <tr>
              <td>Campaigns</td>
              <td>&#10003;</td>
              <td>&#10003;</td>
              <td>&#10003;</td>
            </tr>
            <tr>
              <td>Drip Automation</td>
              <td></td>
              <td>&#10003;</td>
              <td>&#10003;</td>
            </tr>
            <tr>
              <td>Export Customers</td>
              <td>&#10003;</td>
              <td>&#10003;</td>
              <td>&#10003;</td>
            </tr>
            <tr>
              <td>Popup Builder</td>
              <td></td>
              <td></td>
              <td>&#10003;</td>
            </tr>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Compare;
