import Button from '@components/UI/Button/Button';
import styles from './NotFound.module.scss';
import { FC } from 'react';
import Image from 'next/image';

import not_found_img from '@assets/404-bg.png';
import Link from 'next/link';

const NotFoundScreen: FC = () => {
  return (
    <section
      style={{ minHeight: not_found_img.height }}
      className={styles.section}
    >
      <Image
        className={styles.image}
        src={not_found_img}
        alt="bg-404"
        placeholder="blur"
      />
      <div className={styles.container}>
        <h1 className={styles.codeError}>404</h1>
        <h3 className={styles.title}>Page Not Found</h3>
        <p className={styles.text}>
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable
        </p>
        <Link href={'/'}>
          <Button className={styles.button} size="big">
            Back to Home
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default NotFoundScreen;
