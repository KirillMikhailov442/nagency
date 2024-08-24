import PolicyScreen from '@screens/Policy/Policy';
import { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
};

const Policy: NextPage = () => <PolicyScreen />;

export default Policy;
