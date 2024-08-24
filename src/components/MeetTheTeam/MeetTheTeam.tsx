import Card from '@components/Cards/CardTeam/Card';
import styles from './MeetTheTeam.module.scss';

import { FC } from 'react';

import team_img_1 from '@assets/team/img-1.png';
import team_img_2 from '@assets/team/img-2.png';
import team_img_3 from '@assets/team/img-3.png';
import team_img_4 from '@assets/team/img-4.png';
import team_img_5 from '@assets/team/img-5.png';
import team_img_6 from '@assets/team/img-6.png';

const MeetTheTeam: FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.description}>Meet the Team</p>
        <h2>Professional Creative Team</h2>
        <div className={styles.cards}>
          <div className={styles.cardsList}>
            <Card
              bgImage={team_img_1.src}
              name="Samuel"
              profession="Mobile Developer"
              style={{ rotate: '-2.5deg' }}
            />
            <Card
              bgImage={team_img_2.src}
              name="Samuel"
              profession="Mobile Developer"
              style={{ rotate: '0.5deg' }}
            />
            <Card
              bgImage={team_img_3.src}
              name="Samuel"
              profession="Mobile Developer"
              style={{ rotate: '-2.5deg' }}
            />
            <Card
              bgImage={team_img_4.src}
              name="Samuel"
              profession="Mobile Developer"
              style={{ rotate: '2.5deg' }}
            />
            <Card
              bgImage={team_img_5.src}
              name="Samuel"
              profession="Mobile Developer"
              style={{ rotate: '-2deg' }}
            />
            <Card
              bgImage={team_img_6.src}
              name="Samuel"
              profession="Mobile Developer"
              style={{ rotate: '3deg' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;
