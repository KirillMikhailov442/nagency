import ContactUs from '@components/ContactUs/ContactUs';
import FAQ from '@components/FAQ/FAQ';
import Testimonials from '@components/Testimonials/Testimonials';
import TitlePage from '@components/TitlePage/TitlePage';
import { FC } from 'react';
import Says from './components/Says/Says';

const TestimonialScreen: FC = () => {
  return (
    <>
      <TitlePage />
      <Testimonials />
      <Says />
      <FAQ />
      <ContactUs />
    </>
  );
};

export default TestimonialScreen;
