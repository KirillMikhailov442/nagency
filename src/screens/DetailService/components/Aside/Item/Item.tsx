'use client';

import { FC, HTMLAttributes } from 'react';
import styles from './Item.module.scss';
import Link from 'next/link';

import { IoIosArrowForward } from 'react-icons/io';
import { usePathname } from 'next/navigation';

import cn from 'clsx';

interface ItemProps extends HTMLAttributes<HTMLLIElement> {
  name: string;
  href: string;
}

const Item: FC<ItemProps> = ({ name, href, ...props }) => {
  const pathname = usePathname();
  return (
    <li className={styles.wrapper} {...props}>
      <Link
        className={cn(styles.item, { [`${styles.active}`]: pathname == href })}
        href={href}
      >
        {name}
        <IoIosArrowForward size={20} />
      </Link>
    </li>
  );
};

export default Item;
