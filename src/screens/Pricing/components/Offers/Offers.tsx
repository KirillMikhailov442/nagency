import Section from '@components/Layouts/Section/Section';
import { FC } from 'react';
import styles from './Offers.module.scss';
import CardPricing from '@components/Cards/CardPricing/Card';

const Offers: FC = () => {
  return (
    <Section
      description="Pricing"
      title="Benefits That You Can Feel Immediately"
      className={styles.section}
    >
      <div className={styles.cards}>
        <CardPricing
          category="Individual"
          description="Customer Reach & Budget"
          price={39}
          numberOfService={1}
          advantages={['Free Platform Access', '9-5PM Customer Support']}
          variant="outline"
        />
        <CardPricing
          category="Individual"
          description="Customer Reach & Budget"
          price={39}
          numberOfService={1}
          advantages={['Free Platform Access', '9-5PM Customer Support']}
        />
        <CardPricing
          category="Individual"
          description="Customer Reach & Budget"
          price={39}
          numberOfService={1}
          advantages={['Free Platform Access', '9-5PM Customer Support']}
          variant="outline"
        />
      </div>
    </Section>
  );
};

export default Offers;
