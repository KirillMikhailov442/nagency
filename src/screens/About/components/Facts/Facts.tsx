import { FC } from 'react';
import styles from './Facts.module.scss';

const Facts: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.item}>
          <h2 className={styles.number}>320+</h2>
          <p className={styles.description}>Complate Projects</p>
        </div>
        <div className={styles.item}>
          <h2 className={styles.number}>25+</h2>
          <p className={styles.description}>Cooperation company</p>
        </div>
        <div className={styles.item}>
          <h2 className={styles.number}>120+</h2>
          <p className={styles.description}>Happy Clients</p>
        </div>
      </div>
    </div>
  );
};

export default Facts;
