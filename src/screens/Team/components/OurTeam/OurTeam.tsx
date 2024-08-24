import { FC } from 'react';
import styles from './OurTeam.module.scss';
import Section from '@components/Layouts/Section/Section';
import CardTeam from '@components/Cards/CardTeam/Card';

import team_img_1 from '@assets/team/img-1.png';
import team_img_2 from '@assets/team/img-2.png';
import team_img_3 from '@assets/team/img-3.png';
import team_img_4 from '@assets/team/img-4.png';
import team_img_5 from '@assets/team/img-5.png';
import team_img_6 from '@assets/team/img-6.png';

const OurTeam: FC = () => {
  return (
    <Section description="Our Team" title="Meet With Professional Team">
      <div className={styles.cards}>
        <CardTeam
          bgImage={team_img_1.src}
          name="Samuel"
          profession="Mobile Developer"
          size="big"
          style={{ rotate: '-2.5deg' }}
        />
        <CardTeam
          bgImage={team_img_2.src}
          name="Samuel"
          profession="Mobile Developer"
          size="big"
          style={{ rotate: '0.5deg' }}
        />
        <CardTeam
          bgImage={team_img_3.src}
          name="Samuel"
          profession="Mobile Developer"
          size="big"
          style={{ rotate: '-2.5deg' }}
        />
        <CardTeam
          bgImage={team_img_4.src}
          name="Samuel"
          profession="Mobile Developer"
          size="big"
          style={{ rotate: '2.5deg' }}
        />
        <CardTeam
          bgImage={team_img_5.src}
          name="Samuel"
          profession="Mobile Developer"
          size="big"
          style={{ rotate: '-2deg' }}
        />
        <CardTeam
          bgImage={team_img_6.src}
          name="Samuel"
          profession="Mobile Developer"
          size="big"
          style={{ rotate: '3deg' }}
        />
      </div>
    </Section>
  );
};

export default OurTeam;
