import TitlePage from '@components/TitlePage/TitlePage';
import { FC } from 'react';
import OurService from './components/OurService/OurService';
import OurWorks from '@components/OurWorks/OurWorks';
import Pricing from '@components/Pricing/Pricing';
import ContactUs from '@components/ContactUs/ContactUs';

const ServiceScreen: FC = () => {
  return (
    <>
      <TitlePage />
      <OurService />
      <OurWorks />
      <Pricing />
      <ContactUs />
    </>
  );
};

export default ServiceScreen;
