import { FC } from 'react';
import TitlePage from '@components/TitlePage/TitlePage';
import Section from '@components/Layouts/Section/Section';
import ContactForm from '@components/Forms/ContactForm/ContactForm';
import AccordionItem from '@components/UI/AccordionItem/AccordionItem';
import { Accordion } from '@chakra-ui/react';
import Button from '@components/UI/Button/Button';

import styles from './FAQ.module.scss';

const FAQScreen: FC = () => {
  return (
    <>
      <TitlePage titlePage="FAQ" pathNamePage="FAQ" />
      <Section
        className={styles.section}
        description="Common Questions"
        title="Frequently Asked Questions"
      >
        <nav className={styles.nav}>
          <Button variant="pink">All</Button>
          <Button variant="white">Service</Button>
          <Button variant="white">Contract</Button>
          <Button variant="white">Payment</Button>
        </nav>
        <Accordion allowToggle>
          <AccordionItem
            label="Lorem ipsum dolor sit amet, consect etur adipiscing elit "
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat, tempor for the main condimentum commodo tincidunt sit dictumst. Eu placerat to a arcu at sem vitae eros, purus nonprofit organizations."
            open
          />
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
          <AccordionItem
            label="Lorem ipsum dolor sit amet, consect etur adipiscing elit "
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat, tempor for the main condimentum commodo tincidunt sit dictumst. Eu placerat to a arcu at sem vitae eros, purus nonprofit organizations."
          />
          <Accordion
            label="Lorem ipsum dolor sit amet, consect etur adipiscing elit "
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat, tempor for the main condimentum commodo tincidunt sit dictumst. Eu placerat to a arcu at sem vitae eros, purus nonprofit organizations."
          />
        </Accordion>
      </Section>
      <ContactForm />
    </>
  );
};

export default FAQScreen;
