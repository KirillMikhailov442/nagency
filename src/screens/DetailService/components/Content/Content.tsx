'use client';

import { FC } from 'react';
import styles from './Content.module.scss';
import ReactPlayer from 'react-player';
import { FaPlay } from 'react-icons/fa';

const PlayButton: FC = () => {
  return (
    <div className={styles.buttonStart}>
      <FaPlay />
    </div>
  );
};

const Content: FC = () => {
  return (
    <div className={styles.content}>
      <p className={styles.description}>Detail Service</p>
      <h2 className={styles.title}>Consultant Planning</h2>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua Utenimad minim
        veniam, quis nostrud exercitation dolore magna. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua Utenimad minim veniam, quis nostrud
        exercitation dolore magna
      </p>
      <div className={styles.video}>
        <ReactPlayer
          controls
          playIcon={<PlayButton />}
          url={'https://vimeo.com/90509568'}
        />
      </div>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua Utenimad minim
        veniam, quis nostrud exercitation dolore magna. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua Utenimad minim veniam, quis nostrud
        exercitation dolore magna
      </p>
    </div>
  );
};

export default Content;
