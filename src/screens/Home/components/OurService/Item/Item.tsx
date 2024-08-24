import Link from 'next/link';
import React, { FC, HTMLAttributes } from 'react';
import styles from './Item.module.scss';

import { FaArrowRightLong } from 'react-icons/fa6';
import Image, { StaticImageData } from 'next/image';

interface ItemProps extends HTMLAttributes<HTMLDivElement> {
  icon: StaticImageData;
  title: string;
  text: string;
  href: string;
}

const Item: FC<ItemProps> = ({ icon, title, text, href, ...props }) => {
  return (
    <Link className={styles.wrapper} href={href}>
      <div className={styles.card} {...props}>
        <Image className={styles.icon} src={icon} alt="icon" />
        <h5 className={styles.title}>{title}</h5>
        <p className={styles.text}>{text}</p>
        <Link className={styles.link} href={href}>
          Read more <FaArrowRightLong />
        </Link>
      </div>
    </Link>
  );
};

export default Item;
