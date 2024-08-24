import { FC } from 'react';
import styles from './Trusted.module.scss';
import Link from 'next/link';
import Image from 'next/image';

import trusted_image_1 from '@assets/trusted/img-1.png';
import trusted_image_2 from '@assets/trusted/img-2.png';
import trusted_image_3 from '@assets/trusted/img-3.png';
import trusted_image_4 from '@assets/trusted/img-4.png';
import trusted_image_5 from '@assets/trusted/img-5.png';

const Trusted: FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.description}>Trusted by</p>
        <ul className={styles.list}>
          <Link href={'/'}>
            <Image src={trusted_image_1} alt="trusted-img" />
          </Link>
          <Link href={'/'}>
            <Image src={trusted_image_2} alt="trusted-img" />
          </Link>
          <Link href={'/'}>
            <Image src={trusted_image_3} alt="trusted-img" />
          </Link>
          <Link href={'/'}>
            <Image src={trusted_image_4} alt="trusted-img" />
          </Link>
          <Link href={'/'}>
            <Image src={trusted_image_5} alt="trusted-img" />
          </Link>
        </ul>
      </div>
    </section>
  );
};

export default Trusted;
