import { FC } from 'react';
import styles from './CEO.module.scss';
import Card from '@components/Cards/CardTeam/Card';

import ceo_img from '@assets/team/img-2.png';

const CEO: FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Card
          bgImage={ceo_img.src}
          name="Albert William"
          profession="Project Manager"
          className={styles.ceo}
        />
        <div className={styles.content}>
          <h2>
            &quot; Maximize Your Reach with Marketing - Unlock Your
            Business&apos;s Growth Potential! &quot;
          </h2>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad
            minim veniam, quis nostrud exercitation dolore magna
          </p>
          <div className={styles.info}>
            <h5>Albert William</h5>
            <p>Project Manager / CEO</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CEO;
