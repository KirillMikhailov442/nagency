import TestimonialScreen from '@screens/Testimonial/Testimonial';
import { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: 'Testimonial',
};

const Testimonial: NextPage = () => <TestimonialScreen />;

export default Testimonial;
