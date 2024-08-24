import TeamScreen from '@screens/Team/Team';
import { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: 'Our Team',
};

const Team: NextPage = () => <TeamScreen />;

export default Team;
