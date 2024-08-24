'use client';

import { FC, useState } from 'react';
import styles from './FAQ.module.scss';
import { Accordion } from '@chakra-ui/react';

import AccordionItem from '@components/UI/AccordionItem/AccordionItem';
import Image from 'next/image';

import team_img_1 from '@assets/other/img-1.jpg';
import team_img_2 from '@assets/other/img-2.jpg';
import team_img_3 from '@assets/other/img-3.jpg';

const FAQ: FC = () => {
  const [index, setIndex] = useState(0);

  return (
    <section
      className={styles.section}
      style={{ minHeight: team_img_1.height + 200 }}
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.description}>Common Questions</p>
          <h2 className={styles.title}>Frequently Asked Questions</h2>
          <Accordion
            className={styles.accordionWrapper}
            // index={index}
            // onChange={expandedIndex => setIndex(Number(expandedIndex))}
            allowToggle
          >
            <AccordionItem
              label="Lorem ipsum dolor sit amet, consect etur adipiscing elit "
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat, tempor for the main condimentum commodo tincidunt sit dictumst. Eu placerat to a arcu at sem vitae eros, purus nonprofit organizations."
            />
            <AccordionItem
              label="Lorem ipsum dolor sit amet, consect etur adipiscing elit "
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat, tempor for the main condimentum commodo tincidunt sit dictumst. Eu placerat to a arcu at sem vitae eros, purus nonprofit organizations."
            />
            <AccordionItem
              label="Lorem ipsum dolor sit amet, consect etur adipiscing elit "
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat, tempor for the main condimentum commodo tincidunt sit dictumst. Eu placerat to a arcu at sem vitae eros, purus nonprofit organizations."
            />
          </Accordion>
        </div>
        <div className={styles.images}>
          <Image src={team_img_1} alt="team-img" />
          <Image src={team_img_2} alt="team-img" />
          <Image src={team_img_3} alt="team-img" />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
