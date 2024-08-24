import TitlePage from '@components/TitlePage/TitlePage';
import { FC } from 'react';
import Hero from './components/Hero/Hero';
import CEO from './components/CEO/CEO';
import Facts from './components/Facts/Facts';
import OurVisions from './components/OurVisions/OurVisions';
import MeetTheTeam from '@components/MeetTheTeam/MeetTheTeam';
import OurWorks from '@components/OurWorks/OurWorks';
import Testimonials from '@components/Testimonials/Testimonials';
import ContactUs from '@components/ContactUs/ContactUs';

const AboutScreen: FC = () => {
  return (
    <>
      <TitlePage titlePage="About Us" pathNamePage="About Us" />
      <Hero />
      <CEO />
      <Facts />
      <OurVisions />
      <MeetTheTeam />
      <OurWorks />
      <Testimonials />
      <ContactUs />
    </>
  );
};

export default AboutScreen;
