import { FC } from 'react';
import styles from './OurProjects.module.scss';
import Card from '@components/Cards/CardProject/Card';

import img_project_1 from '@assets/projects/img-1.png';
import img_project_2 from '@assets/projects/img-2.png';
import img_project_3 from '@assets/projects/img-3.png';
import img_project_4 from '@assets/projects/img-4.png';
import img_project_5 from '@assets/projects/img-5.png';
import img_project_6 from '@assets/projects/img-6.png';

const OurProjects: FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.description}>Our Projects</p>
        <h2 className={styles.title}>Latest Project We Have Done</h2>
        <li className={styles.list}>
          <Card
            bgImage={img_project_1}
            name="Website VR"
            category="Web Development"
            style={{ rotate: '-1.5deg' }}
            className={styles.card}
          />
          <Card
            bgImage={img_project_2}
            name="Website VR"
            category="Web Development"
            style={{ rotate: '-2.33deg' }}
            className={styles.card}
          />
          <Card
            bgImage={img_project_3}
            name="Website VR"
            category="Web Development"
            style={{ rotate: '3deg' }}
            className={styles.card}
          />
          <Card
            bgImage={img_project_4}
            name="Website VR"
            category="Web Development"
            style={{ rotate: '-2.53deg' }}
            className={styles.card}
          />
          <Card
            bgImage={img_project_5}
            name="Website VR"
            category="Web Development"
            style={{ rotate: '0.5deg' }}
            className={styles.card}
          />
          <Card
            bgImage={img_project_6}
            name="Website VR"
            category="Web Development"
            style={{ rotate: '2.5deg' }}
            className={styles.card}
          />
        </li>
      </div>
    </section>
  );
};

export default OurProjects;
