import FAQScreen from '@screens/FAQ/FAQ';
import { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: 'FAQ',
};

const FAQ: NextPage = () => <FAQScreen />;

export default FAQ;
