import ContactUs from '@components/ContactUs/ContactUs';
import FAQ from '@components/FAQ/FAQ';
import TitlePage from '@components/TitlePage/TitlePage';
import { FC } from 'react';
import Offers from './components/Offers/Offers';
import Compare from './components/Compare/Compare';

const PricingScreen: FC = () => {
  return (
    <>
      <TitlePage />
      <Offers />
      <Compare />
      <FAQ />
      <ContactUs />
    </>
  );
};

export default PricingScreen;
