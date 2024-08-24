import styles from './WhatWeDo.module.scss';

import { FC } from 'react';

import icon_checklist from '@assets/icons/outline/checklist.png';
import icon_check from '@assets/icons/outline/check.png';
import icon_marking from '@assets/icons/outline/marking.png';
import Item from './Item/Item';

const WhatWeDo: FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.description}>What We Do</p>
        <h2>What Our Team Do</h2>
        <ul className={styles.list}>
          <Item
            icon={icon_checklist}
            title="Planning"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
          />
          <Item
            icon={icon_check}
            title="Validation"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
          />
          <Item
            icon={icon_marking}
            title="Decition"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
          />
        </ul>
      </div>
    </section>
  );
};

export default WhatWeDo;
