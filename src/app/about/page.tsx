import AboutScreen from '@screens/About/about';
import { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: 'About',
};

const About: NextPage = () => <AboutScreen />;

export default About;
