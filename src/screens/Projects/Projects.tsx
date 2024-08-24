import ContactUs from '@components/ContactUs/ContactUs';
import FAQ from '@components/FAQ/FAQ';
import OurProjects from '@components/OurProjects/OurProjects';
import TitlePage from '@components/TitlePage/TitlePage';
import { FC } from 'react';
import Trusted from './components/Trusted/Trusted';

const ProjectsScreeen: FC = () => {
  return (
    <>
      <TitlePage titlePage="Our Projects" pathNamePage="Our Projects" />
      <OurProjects />
      <Trusted />
      <FAQ />
      <ContactUs />
    </>
  );
};

export default ProjectsScreeen;
