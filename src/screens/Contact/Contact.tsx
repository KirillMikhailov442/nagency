import TitlePage from '@components/TitlePage/TitlePage';
import { FC } from 'react';
import ContactForm from '@components/Forms/ContactForm/ContactForm';

const ContactScreen: FC = () => {
  return (
    <>
      <TitlePage titlePage="Contact Us" pathNamePage="Contact Us" />
      <ContactForm />
    </>
  );
};

export default ContactScreen;
