import TermsScreen from '@screens/Terms/Terms';
import { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Conditions',
};

const Terms: NextPage = () => <TermsScreen />;

export default Terms;
