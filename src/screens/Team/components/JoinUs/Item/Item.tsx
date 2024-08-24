import { FC, HTMLAttributes } from 'react';
import styles from './Item.module.scss';
import Image, { StaticImageData } from 'next/image';

import cn from 'clsx';

interface ItemProps extends HTMLAttributes<HTMLLIElement> {
  icon: StaticImageData;
  title: string;
  subtitle: string;
}

const Item: FC<ItemProps> = ({
  icon,
  title,
  subtitle,
  className,
  ...props
}) => {
  return (
    <li className={cn(styles.item, className)} {...props}>
      <Image
        className={styles.image}
        width={icon.width}
        height={icon.height}
        src={icon.src}
        alt="join-icon"
      />
      <div>
        <h5 className={styles.title}>{title}</h5>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
    </li>
  );
};

export default Item;
