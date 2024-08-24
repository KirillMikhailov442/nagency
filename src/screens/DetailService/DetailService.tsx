import styles from './DetailService.module.scss';

import FAQ from '@components/FAQ/FAQ';
import TitlePage from '@components/TitlePage/TitlePage';
import { FC } from 'react';
import WhatWeDo from './components/WhatWeDo/WhatWeDo';
import Aside from './components/Aside/Aside';
import Content from './components/Content/Content';
import ContactUs from '@components/ContactUs/ContactUs';

const DetailServiceScreen: FC = () => {
  return (
    <>
      <TitlePage titlePage="Detail Service" pathNamePage="Detail Page" />
      <section className={styles.section}>
        <div className={styles.main}>
          <Aside />
          <Content />
        </div>
      </section>
      <WhatWeDo />
      <FAQ />
      <ContactUs />
    </>
  );
};

export default DetailServiceScreen;
