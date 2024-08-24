import ProjectsScreeen from '@screens/Projects/Projects';
import { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: 'Our Projects',
};

const Projects: NextPage = () => <ProjectsScreeen />;

export default Projects;
