import Item from './Item/Item';
import styles from './OurService.module.scss';
import { FC } from 'react';

import icon_chart from '@assets/icons/base/chart.png';
import icon_graph from '@assets/icons/base/graph.png';
import icon_filter from '@assets/icons/base/filter.png';
import icon_work from '@assets/icons/base/work.png';
import icon_heart from '@assets/icons/base/heart.png';
import icon_activity from '@assets/icons/base/activity.png';
import Section from '@components/Layouts/Section/Section';

const OurService: FC = () => {
  return (
    <Section description="Our Service" title="What Can We Bring for You">
      <div className={styles.list}>
        <Item
          icon={icon_chart}
          title="Consultant Plan"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
          href="/consultant"
        />
        <Item
          icon={icon_graph}
          title="Design Thingking"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
          href="/consultant"
        />
        <Item
          icon={icon_filter}
          title="SEO Marketing"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
          href="/consultant"
        />
        <Item
          icon={icon_work}
          title="Business Advisor"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
          href="/consultant"
        />
        <Item
          icon={icon_heart}
          title="Brand Personal"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
          href="/consultant"
        />
        <Item
          icon={icon_activity}
          title="Development"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
          href="/consultant"
        />
      </div>
    </Section>
  );
};

export default OurService;
