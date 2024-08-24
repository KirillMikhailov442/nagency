import { FC, HTMLAttributes } from 'react';
import styles from './Card.module.scss';
import Button from '@components/UI/Button/Button';

import cn from 'clsx';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  category: string;
  description: string;
  price: number;
  numberOfService: number;
  advantages: string[];
  variant?: 'pink' | 'outline';
}

const CardPricing: FC<CardProps> = ({
  category,
  description,
  price,
  numberOfService,
  advantages,
  className,
  variant = 'pink',
}) => {
  if (variant == 'pink') {
    return (
      <div className={cn(styles.card, styles.pink, className)}>
        <header className={styles.container}>
          <p className={styles.category}>{category}</p>
          <p className={styles.description}>{description}</p>
          <p className={styles.price}>
            <b className={styles.priceNumber}>${price}</b>/Month
          </p>
        </header>
        <hr className={styles.line} />
        <footer className={styles.container}>
          <p>{numberOfService} Service</p>
          <ul className={styles.list}>
            {advantages.map((item, index) => (
              <li className={styles.listItem} key={index}>
                {item}
              </li>
            ))}
          </ul>
          <Button className={styles.button} variant="white" size="big">
            Purchase Now
          </Button>
        </footer>
      </div>
    );
  } else {
    return (
      <div className={cn(styles.card, styles.outline, className)}>
        <header className={styles.container}>
          <p className={cn(styles.category, styles.blackText)}>{category}</p>
          <p className={styles.description}>{description}</p>
          <p className={cn(styles.price, styles.blackText)}>
            <b className={styles.priceNumber}>${price}</b>/Month
          </p>
        </header>
        <hr className={styles.line} />
        <footer className={styles.container}>
          <p>{numberOfService} Service</p>
          <ul className={styles.list}>
            {advantages.map((item, index) => (
              <li className={styles.listItem} key={index}>
                {item}
              </li>
            ))}
          </ul>
          <Button className={styles.button} size="big">
            Purchase Now
          </Button>
        </footer>
      </div>
    );
  }
};

export default CardPricing;
