import PricingScreen from '@screens/Pricing/Pricing';
import { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: 'Pricing',
};

const Pricing: NextPage = () => <PricingScreen />;

export default Pricing;
