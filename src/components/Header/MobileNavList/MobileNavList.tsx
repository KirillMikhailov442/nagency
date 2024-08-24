'use client';

import Link from 'next/link';
import cn from 'clsx';

import { FC, useRef } from 'react';
import useAppSelector from '@/hooks/useAppSelector';
import Button from '@components/UI/Button/Button';

import styles from './MobileNavList.module.scss';
import useAppDispatch from '@/hooks/useAppDispatch';
import { hideComponent } from '@store/slices/showComponents';

const MobileNavList: FC = () => {
  const showNav = useAppSelector(state => state.showComponents.mobileNavList);
  const dispatch = useAppDispatch();
  const navRef = useRef<HTMLDivElement>(null);

  const closeNav = (area: any) => {
    if (!navRef.current?.contains(area)) {
      dispatch(hideComponent('mobileNavList'));
    }
  };

  return (
    <div
      onClick={e => closeNav(e.target)}
      className={cn(styles.wrapper, { [`${styles.wrapperShowNav}`]: showNav })}
    >
      <nav
        ref={navRef}
        className={cn(styles.nav, { [`${styles.navActive}`]: showNav })}
      >
        <ul className={styles.list}>
          <li
            onClick={() => dispatch(hideComponent('mobileNavList'))}
            className={styles.listItem}
          >
            <Link className={styles.listLink} href={'/'}>
              Home
            </Link>
          </li>
          <li
            onClick={() => dispatch(hideComponent('mobileNavList'))}
            className={styles.listItem}
          >
            <Link className={styles.listLink} href={'/about'}>
              About
            </Link>
          </li>
          <li
            onClick={() => dispatch(hideComponent('mobileNavList'))}
            className={styles.listItem}
          >
            <Link className={styles.listLink} href={'/service'}>
              Service
            </Link>
          </li>
          <li
            onClick={() => dispatch(hideComponent('mobileNavList'))}
            className={styles.listItem}
          >
            <Link className={styles.listLink} href={'/testimonial'}>
              Testimonial
            </Link>
          </li>

          <li
            onClick={() => dispatch(hideComponent('mobileNavList'))}
            className={styles.listItem}
          >
            <Link className={styles.listLink} href={'/team'}>
              Our Team
            </Link>
          </li>

          <li
            onClick={() => dispatch(hideComponent('mobileNavList'))}
            className={styles.listItem}
          >
            <Link className={styles.listLink} href={'/projects'}>
              Our Projects
            </Link>
          </li>

          <li
            onClick={() => dispatch(hideComponent('mobileNavList'))}
            className={styles.listItem}
          >
            <Link className={styles.listLink} href={'/faq'}>
              FAQ
            </Link>
          </li>

          <li
            onClick={() => dispatch(hideComponent('mobileNavList'))}
            className={styles.listItem}
          >
            <Link className={styles.listLink} href={'/terms'}>
              Terms ofConditions
            </Link>
          </li>

          <li
            onClick={() => dispatch(hideComponent('mobileNavList'))}
            className={styles.listItem}
          >
            <Link className={styles.listLink} href={'/policy'}>
              Privacy Policy
            </Link>
          </li>
          <li
            onClick={() => dispatch(hideComponent('mobileNavList'))}
            className={styles.listItem}
          >
            <Link className={styles.listLink} href={'/pricing'}>
              Pricing
            </Link>
          </li>
          <li
            onClick={() => dispatch(hideComponent('mobileNavList'))}
            className={styles.listItem}
          >
            <Link href={'/contact'}>
              <Button className={styles.button} size="big" variant="pink">
                Contact Us
              </Button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileNavList;
