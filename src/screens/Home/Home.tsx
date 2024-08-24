import { FC } from 'react';
import Hero from './components/Hero/Hero';
import OurService from './components/OurService/OurService';
import OurWorks from '../../components/OurWorks/OurWorks';
import MeetTheTeam from '@components/MeetTheTeam/MeetTheTeam';
import OurSolutions from './components/OurSolutions/OurSolutions';
import OurProjects from '@components/OurProjects/OurProjects';
import Pricing from '@components/Pricing/Pricing';
import Testimonials from '../../components/Testimonials/Testimonials';
import FAQ from '@components/FAQ/FAQ';
import ContactUs from '@components/ContactUs/ContactUs';

const HomeScreen: FC = () => {
  return (
    <>
      <Hero />
      <OurService />
      <OurWorks />
      <MeetTheTeam />
      <OurSolutions />
      <OurProjects />
      <Pricing />
      <Testimonials />
      <FAQ />
      <ContactUs />
    </>
  );
};

export default HomeScreen;
