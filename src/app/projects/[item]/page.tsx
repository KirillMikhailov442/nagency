import DetailProjectScreen from '@screens/DetailProject/DetailProject';
import { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: 'Detail Projects',
};

const DetailProject: NextPage = () => <DetailProjectScreen />;

export default DetailProject;
