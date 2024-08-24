import { FC } from 'react';
import styles from './Aside.module.scss';
import Item from './Item/Item';

const Aside: FC = () => {
  return (
    <aside className={styles.aside}>
      <div className={styles.content}>
        <h4 className={styles.title}>Service</h4>
        <ul className={styles.list}>
          <Item
            name="Consultant Planning"
            href="/service/consultant+planning"
          />
          <Item name="Design Thingking" href="/service/designt+thingking" />
          <Item name="SEO Marketing" href="/service/seo+marketing" />
          <Item name="Business Advisor" href="/service/business+advisor" />
          <Item name="Brand Personal" href="/service/brand+personal" />
          <Item name="Development" href="/service/development" />
        </ul>
      </div>
    </aside>
  );
};

export default Aside;
