import styles from './AccordionItem.module.scss';

import {
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from '@chakra-ui/react';
import { FC, HTMLAttributes } from 'react';

import { IoIosArrowDown } from 'react-icons/io';

interface AccordionItemProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  text: string;
}

const Accordion: FC<AccordionItemProps> = ({ label, text, ...props }) => {
  return (
    <AccordionItem className={styles.accordion} {...props}>
      <AccordionButton className={styles.accordionLabel}>
        <IoIosArrowDown size={25} className={styles.arrow} />
        {label}
      </AccordionButton>
      <AccordionPanel className={styles.accordionPanel}>{text}</AccordionPanel>
    </AccordionItem>
  );
};

export default Accordion;
