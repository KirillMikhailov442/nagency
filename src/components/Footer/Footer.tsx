import { FC } from 'react';
import Image from 'next/image';

import logo_img from '@assets/logo.png';
import Link from 'next/link';

import cn from 'clsx';

import { AiFillDiscord, AiOutlineTwitter, AiFillYoutube } from 'react-icons/ai';
import { FaTelegramPlane } from 'react-icons/fa';

import styles from './Footer.module.scss';

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.info}>
          <Image src={logo_img} alt="logo-img" />
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididum ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt
          </p>
          <p className={cn(styles.copy, styles.bottom)}>
            &copy; Copyright 2022, All Rights Reserved by Nagency
          </p>
        </div>
        <div className={styles.column}>
          <p className={styles.title}>Quick links</p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <Link className={styles.listLink} href={'/'}>
                Home
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link className={styles.listLink} href={'/about'}>
                About
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link className={styles.listLink} href={'/service'}>
                Service
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link className={styles.listLink} href={'/testimonial'}>
                Testimonial
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link className={styles.listLink} href={'/pricing'}>
                Pricing
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.column}>
          <p className={styles.title}>Help</p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <Link className={styles.listLink} href={'/policy'}>
                Privacy Policy
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link className={styles.listLink} href={'/terms'}>
                Terms & Conditions
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link className={styles.listLink} href={'/contact'}>
                Contact us
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.newsletter}>
          <p className={styles.title}>Subscribe to newsletter</p>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consec tetur adip iscing elit. Sit quis
            auctor.
          </p>
          <form className={styles.form}>
            <input className={styles.input} placeholder="Enter email address" />
            <button className={styles.button}>Subscribe</button>
          </form>
          <div className={styles.bottom}>
            Follow us on:
            <div className={styles.socialMedia}>
              <Link href={'/'}>
                <AiFillDiscord size={18} />
              </Link>
              <Link href={'/'}>
                <AiOutlineTwitter size={18} />
              </Link>
              <Link href={'/'}>
                <FaTelegramPlane size={18} />
              </Link>
              <Link href={'/'}>
                <AiFillYoutube size={18} />
              </Link>
            </div>
          </div>
          <p className={styles.mobileCopy}>
            &copy; Copyright 2022, All Rights Reserved by Nagency
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
