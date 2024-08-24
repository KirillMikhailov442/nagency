import { FC } from 'react';
import styles from './Pricing.module.scss';
import Link from 'next/link';
import Button from '@components/UI/Button/Button';
import Card from '../Cards/CardPricing/Card';

const Pricing: FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.info}>
          <p className={styles.description}>Pricing</p>
          <h2 className={styles.title}>
            Benefits That You Can Feel Immediately
          </h2>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad
            minim veniam, quis nostrud exercitation dolore magna
          </p>
          <Link href={'/pricing'}>
            <Button size="big">See All Pricing</Button>
          </Link>
        </div>
        <Card
          category="Business"
          description="Customer Reach & Budget"
          price={49}
          numberOfService={1}
          advantages={['Free Platform Access', '24/7 Customer Support']}
          className={styles.card}
        />
        <Card
          category="Corporate"
          description="Customer Reach & Budget"
          price={199}
          numberOfService={2}
          advantages={['Free Platform Access', '24/7 Customer Support']}
          variant="outline"
          className={styles.card}
        />
      </div>
    </section>
  );
};

export default Pricing;
