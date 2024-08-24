import React, { FC, HTMLAttributes } from 'react';
import styles from './Item.module.scss';
import Image, { StaticImageData } from 'next/image';

interface ItemProps extends HTMLAttributes<HTMLLIElement> {
  icon: StaticImageData;
  title: string;
  text: string;
}

const Item: FC<ItemProps> = ({ icon, title, text, ...props }) => {
  return (
    <li className={styles.card} {...props}>
      <div className={styles.image}>
        <Image src={icon} alt="icon" />
      </div>
      <h5 className={styles.title}>{title}</h5>
      <p className={styles.text}>{text}</p>
    </li>
  );
};

export default Item;
