import { FC } from 'react';
import styles from './ContactUs.module.scss';
import Image from 'next/image';

import banner_img from '@assets/other/img-4.png';
import circle_img from '@assets/other/circle.png';

import Button from '@components/UI/Button/Button';
import Link from 'next/link';

const ContactUs: FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Image className={styles.image} src={banner_img} alt="banner-img" />
        <div className={styles.content}>
          <p className={styles.description}>Contact Us</p>
          <h2 className={styles.title}>
            We help you to grow your business faster & easier.
          </h2>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididun.
          </p>
          <Link className={styles.button} href={'/contact'}>
            <Button size="big" variant="pink">
              Contact Us
            </Button>
          </Link>
        </div>
        <Image className={styles.circle} src={circle_img} alt="circle-img" />
      </div>
    </section>
  );
};

export default ContactUs;
