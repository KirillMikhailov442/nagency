import ContactScreen from '@screens/Contact/Contact';
import { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
};

const Contact: NextPage = () => <ContactScreen />;

export default Contact;
