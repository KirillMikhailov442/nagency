import { FC, HTMLAttributes } from 'react';
import styles from './Banner.module.scss';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface BannerProps extends HTMLAttributes<HTMLDivElement> {
  image: StaticImageData;
  title: string;
  text: string;
  icon: StaticImageData;
  href: string;
  swap?: boolean;
}

const Banner: FC<BannerProps> = ({
  image,
  title,
  text,
  icon,
  href,
  swap = false,
  ...props
}) => {
  return (
    <div className={styles.banner} {...props}>
      <Image
        className={styles.image}
        layout="responsive"
        src={image}
        alt="banner-img"
        style={{ order: swap ? '1' : '-1' }}
      />
      <div className={styles.content}>
        <Image className={styles.icon} src={icon} alt="icon" />
        <Link className={styles.title} href={href}>
          <h2>{title}</h2>
        </Link>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
};

export default Banner;
