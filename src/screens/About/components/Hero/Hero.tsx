import { FC } from 'react';
import styles from './Hero.module.scss';
import Image from 'next/image';

import hero_img from '@assets/other/img-5.png';
import Link from 'next/link';
import Button from '@components/UI/Button/Button';

const Hero: FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.description}>About Us</p>
          <h2 className={styles.title}>
            We Have 15 Years Of Experience On Creative Digital Agency
          </h2>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad
            minim veniam, quis nostrud exercitation dolore magna
          </p>
          <ul className={styles.facts}>
            <li className={styles.fact}>
              <h5>1254+</h5>
              <p>Happy Clients</p>
            </li>
            <li className={styles.fact}>
              <h5>3245+</h5>
              <p>Project Complated</p>
            </li>
          </ul>
          <Link href={'/service'}>
            <Button size="big">View Service</Button>
          </Link>
        </div>
        <Image
          className={styles.image}
          layout="responsive"
          src={hero_img}
          alt="banner-img"
        />
      </div>
    </section>
  );
};

export default Hero;
