import DetailServiceScreen from '@screens/DetailService/DetailService';
import { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: 'Detail Service',
};

const DetailService: NextPage = () => <DetailServiceScreen />;

export default DetailService;
