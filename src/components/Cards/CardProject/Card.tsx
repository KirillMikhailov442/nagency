import { FC, HTMLAttributes } from 'react';
import styles from './Card.module.scss';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

import cn from 'clsx';

interface CardProps extends HTMLAttributes<HTMLLIElement> {
  bgImage: StaticImageData;
  name: string;
  category: string;
}

const CardProject: FC<CardProps> = ({
  bgImage,
  name,
  category,
  className,
  ...props
}) => {
  return (
    <li className={cn(styles.wrapper, className)} {...props}>
      <Link className={styles.card} href={'/projects/1'}>
        <Image src={bgImage} layout="responsive" alt="prject-img" />
        <div className={styles.content}>
          <div className={styles.topElement}>
            <p className={styles.name}>{name}</p>
            <p className={styles.category}>{category}</p>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default CardProject;
