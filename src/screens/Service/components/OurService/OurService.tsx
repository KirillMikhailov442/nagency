import { FC } from 'react';
import styles from './OurService.module.scss';
import Banner from '../Banner/Banner';

import service_img_1 from '@assets/services/img-1.png';
import service_img_2 from '@assets/services/img-2.png';
import service_img_3 from '@assets/services/img-3.png';
import service_img_4 from '@assets/services/img-4.png';
import service_img_5 from '@assets/services/img-5.png';
import service_img_6 from '@assets/services/img-6.png';

import chart_img from '@assets/icons/base/chart.png';
import graph_img from '@assets/icons/base/graph.png';
import filter_img from '@assets/icons/base/filter.png';
import work_img from '@assets/icons/base/work.png';
import heart_img from '@assets/icons/base/heart.png';
import activity_img from '@assets/icons/base/activity.png';

const OurService: FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <header className={styles.header}>
          <p className={styles.description}>Our Service</p>
          <h2 className={styles.title}>What Can We Bring for You</h2>
        </header>
        <div className={styles.listServices}>
          <Banner
            image={service_img_1}
            icon={chart_img}
            title="Consultant Plan"
            href="/service/consultant+planning"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna"
          />
          <Banner
            image={service_img_2}
            icon={graph_img}
            title="Design Thingking"
            href="/service/designt+thingking"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna"
            swap
          />
          <Banner
            image={service_img_3}
            icon={filter_img}
            title="SEO Marketing"
            href="/service/seo+marketing"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna"
          />
          <Banner
            image={service_img_4}
            icon={work_img}
            title="Business Advisor"
            href="/service/business+advisor"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna"
            swap
          />
          <Banner
            image={service_img_5}
            icon={heart_img}
            title="Brand Personal"
            href="/service/brand+personal"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna"
          />
          <Banner
            image={service_img_6}
            icon={activity_img}
            title="Design Thingking"
            href="/service/designt+thingking"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna"
            swap
          />
        </div>
      </div>
    </section>
  );
};

export default OurService;
