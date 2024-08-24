import { FC } from 'react';
import styles from './Testimonials.module.scss';
import Marquee from 'react-fast-marquee';
import Comment from './Comment/Comment';

import cn from 'clsx';

import avatar_img_1 from '@assets/clients/img-1.jpg';
import avatar_img_2 from '@assets/clients/img-2.jpg';
import avatar_img_3 from '@assets/clients/img-3.jpg';
import avatar_img_4 from '@assets/clients/img-4.jpg';
import avatar_img_5 from '@assets/clients/img-5.jpg';
import avatar_img_6 from '@assets/clients/img-6.jpg';
import avatar_img_7 from '@assets/clients/img-7.jpg';
import avatar_img_8 from '@assets/clients/img-8.jpg';

const Testimonials: FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.description}>Testimonials</p>
        <h2 className={styles.title}>Our happy clients say about us</h2>
      </div>
      <Marquee className={cn(styles.marquee, styles.light)} gradient>
        <div className={styles.marqueeContent}>
          <div className={styles.marqueeRow}>
            <Comment
              avatar={avatar_img_1}
              text="Lorem ipsum dolor sit amet, consect etur adipiscing elit"
              nickname="jennifer.a"
            />
            <Comment
              avatar={avatar_img_2}
              text="Lorem ipsum dolor sit amet, consect etur adipiscing elit"
              nickname="jennifer.a"
            />
            <Comment
              avatar={avatar_img_3}
              text="Lorem ipsum dolor sit amet, consect etur adipiscing elit"
              nickname="jennifer.a"
            />
            <Comment
              avatar={avatar_img_4}
              text="Lorem ipsum dolor sit amet, consect etur adipiscing elit"
              nickname="jennifer.a"
            />
          </div>
          <div className={styles.marqueeRow}>
            <Comment
              avatar={avatar_img_5}
              text="Lorem ipsum dolor sit amet, consect etur adipiscing elit"
              nickname="jennifer.a"
            />
            <Comment
              avatar={avatar_img_6}
              text="Lorem ipsum dolor sit amet, consect etur adipiscing elit"
              nickname="jennifer.a"
            />
            <Comment
              avatar={avatar_img_7}
              text="Lorem ipsum dolor sit amet, consect etur adipiscing elit"
              nickname="jennifer.a"
            />
            <Comment
              avatar={avatar_img_8}
              text="Lorem ipsum dolor sit amet, consect etur adipiscing elit"
              nickname="jennifer.a"
            />
          </div>
        </div>
      </Marquee>
      <Marquee className={cn(styles.marquee, styles.dark)}>
        <div className={styles.marqueeContent}>
          <div className={styles.marqueeRow}>
            <Comment
              avatar={avatar_img_1}
              text="Lorem ipsum dolor sit amet, consect etur adipiscing elit"
              nickname="jennifer.a"
            />
            <Comment
              avatar={avatar_img_2}
              text="Lorem ipsum dolor sit amet, consect etur adipiscing elit"
              nickname="jennifer.a"
            />
            <Comment
              avatar={avatar_img_3}
              text="Lorem ipsum dolor sit amet, consect etur adipiscing elit"
              nickname="jennifer.a"
            />
            <Comment
              avatar={avatar_img_4}
              text="Lorem ipsum dolor sit amet, consect etur adipiscing elit"
              nickname="jennifer.a"
            />
          </div>
          <div className={styles.marqueeRow}>
            <Comment
              avatar={avatar_img_5}
              text="Lorem ipsum dolor sit amet, consect etur adipiscing elit"
              nickname="jennifer.a"
            />
            <Comment
              avatar={avatar_img_6}
              text="Lorem ipsum dolor sit amet, consect etur adipiscing elit"
              nickname="jennifer.a"
            />
            <Comment
              avatar={avatar_img_7}
              text="Lorem ipsum dolor sit amet, consect etur adipiscing elit"
              nickname="jennifer.a"
            />
            <Comment
              avatar={avatar_img_8}
              text="Lorem ipsum dolor sit amet, consect etur adipiscing elit"
              nickname="jennifer.a"
            />
          </div>
        </div>
      </Marquee>
    </section>
  );
};

export default Testimonials;
