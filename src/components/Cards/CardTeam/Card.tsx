'use client';

import { FC, HTMLAttributes, useEffect, useState } from 'react';
import styles from './Card.module.scss';

import cn from 'clsx';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  bgImage: string;
  name: string;
  profession: string;
  size?: 'medium' | 'big';
}

const CardTeam: FC<CardProps> = ({
  bgImage,
  name,
  profession,
  className,
  size = 'medium',
  style,
  ...props
}) => {
  const [classList, setClassList] = useState<string[]>([]);

  useEffect(() => {
    setClassList(prev => [...prev, styles[size]]);
  }, []);

  return (
    <div
      style={{ backgroundImage: `url(${bgImage})`, ...style }}
      className={cn(styles.card, styles.medium, className, ...classList)}
      {...props}
    >
      <div className={styles.content}>
        <p className={styles.name}>{name}</p>
        <p className={styles.profession}>{profession}</p>
      </div>
    </div>
  );
};

export default CardTeam;
