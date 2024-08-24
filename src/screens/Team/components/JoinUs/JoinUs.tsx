import { FC } from 'react';
import styles from './JoinUs.module.scss';

import graph_image from '@assets/icons/base/graph.png';
import work_image from '@assets/icons/base/work.png';
import activity_image from '@assets/icons/base/activity.png';
import Item from './Item/Item';

const JoinUs: FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <header className={styles.header}>
          <p className={styles.description}>Let’s Join us</p>
          <h2 className={styles.title}>Available Position</h2>
        </header>
        <ul className={styles.list}>
          <Item
            icon={graph_image}
            title="UI Designer"
            subtitle="Remote / Full Time"
            style={{ rotate: '-1.11deg' }}
          />
          <Item
            icon={work_image}
            title="Project Manager"
            subtitle="Remote / Full Time"
            style={{ rotate: '2.25deg' }}
          />
          <Item
            icon={activity_image}
            title="Backend Dev"
            subtitle="Remote / Full Time"
            style={{ rotate: '-1.95deg' }}
          />
          <Item
            icon={activity_image}
            title="Frontend Dev"
            subtitle="Remote / Full Time"
            style={{ rotate: '2.7deg' }}
          />
        </ul>
      </div>
    </section>
  );
};

export default JoinUs;
