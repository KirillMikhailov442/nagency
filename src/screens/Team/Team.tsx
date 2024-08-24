import ContactUs from '@components/ContactUs/ContactUs';
import TitlePage from '@components/TitlePage/TitlePage';
import { FC } from 'react';
import OurTeam from './components/OurTeam/OurTeam';
import JoinUs from './components/JoinUs/JoinUs';
import JoinForm from './components/JoinUsForm/JoinForm';

const TeamScreen: FC = () => {
  return (
    <>
      <TitlePage titlePage="Our Team" pathNamePage="Our Team" />
      <OurTeam />
      <JoinUs />
      <JoinForm />
      <ContactUs />
    </>
  );
};

export default TeamScreen;
