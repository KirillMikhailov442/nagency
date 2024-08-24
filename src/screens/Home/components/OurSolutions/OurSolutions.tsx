import styles from './OurSolutions.module.scss';

import { FC } from 'react';

import icon_mission from '@assets/icons/outline/mission.png';
import icon_idea from '@assets/icons/outline/idea.png';
import icon_target from '@assets/icons/outline/target.png';
import Item from './Item/Item';
import Section from '@components/Layouts/Section/Section';

const OurSolutions: FC = () => {
  return (
    <Section description="Our Solutions" title="Why Choose Us">
      <ul className={styles.list}>
        <Item
          icon={icon_mission}
          title="Great Experience"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
        />
        <Item
          icon={icon_idea}
          title="Best Solutions"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
        />
        <Item
          icon={icon_target}
          title="Efective Strategy"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
        />
      </ul>
    </Section>
  );
};

export default OurSolutions;
