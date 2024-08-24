'use client';

import styles from './Hero.module.scss';

import { FC } from 'react';
import Link from 'next/link';
import Button from '@components/UI/Button/Button';
import Card from '@components/Cards/CardTeam/Card';

import { FaStar } from 'react-icons/fa6';
import Image from 'next/image';

import client_img from '@assets/clients/img-1.jpg';

import team_img_1 from '@assets/team/img-1.png';
import team_img_2 from '@assets/team/img-2.png';
import team_img_3 from '@assets/team/img-3.png';
import team_img_4 from '@assets/team/img-4.png';
import team_img_5 from '@assets/team/img-5.png';
import team_img_6 from '@assets/team/img-6.png';

const Hero: FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>Creative Digital Agency That Help You Go Ahead</h1>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad
            minim veniam, quis nostrud exercitation dolore magna
          </p>
          <Link className={styles.buttonWrapper} href={'/contact'}>
            <Button size="big" variant="blue">
              Contact Us
            </Button>
          </Link>
          <div className={styles.bottom}>
            <ul className={styles.rating}>
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
            </ul>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
              Utenimad minim veniam.
            </p>
            <div className={styles.comment}>
              <Image
                className={styles.avatar}
                width={50}
                height={50}
                src={client_img}
                alt="client-img"
              />
              <div className={styles.commentContent}>
                <h6>Suili Kin</h6>
                <p>CEO Dream Team</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.cards}>
          <div className={styles.cardWrapper}>
            <Card
              bgImage={team_img_1.src}
              name="Albert William"
              profession="Project Manager"
              className={styles.card}
            />
          </div>
          <div className={styles.cardWrapperBottom}>
            <Card
              bgImage={team_img_2.src}
              name="Albert William"
              profession="Project Manager"
              className={styles.card}
            />
          </div>
          <div className={styles.cardWrapper}>
            <Card
              bgImage={team_img_3.src}
              name="Albert William"
              profession="Project Manager"
              className={styles.card}
            />
          </div>
          <div className={styles.cardWrapper}>
            <Card
              bgImage={team_img_4.src}
              name="Albert William"
              profession="Project Manager"
              className={styles.card}
            />
          </div>
          <div className={styles.cardWrapperBottom}>
            <Card
              bgImage={team_img_5.src}
              name="Albert William"
              profession="Project Manager"
              className={styles.card}
            />
          </div>
          <div className={styles.cardWrapper}>
            <Card
              bgImage={team_img_6.src}
              name="Albert William"
              profession="Project Manager"
              className={styles.card}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
