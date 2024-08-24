'use client';

import ReactPlayer from 'react-player';
import styles from './OurWorks.module.scss';
import { FC } from 'react';

import { FaPlay } from 'react-icons/fa';

import preview_img from '@assets/other/video-preview.png';

const PlayButton: FC = () => {
  return (
    <div className={styles.buttonStart}>
      <FaPlay />
    </div>
  );
};

const OurWorks: FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.description}>Our Works</p>
        <h2 className={styles.title}>This is How We Works</h2>
        <div className={styles.video}>
          <ReactPlayer
            controls
            playIcon={<PlayButton />}
            url={'https://vimeo.com/90509568'}
          />
        </div>
      </div>
    </section>
  );
};

export default OurWorks;
