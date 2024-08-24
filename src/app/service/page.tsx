import ServiceScreen from '@screens/Service/Service';
import { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: 'Service',
};

const Service: NextPage = () => <ServiceScreen />;

export default Service;
