import ContactUs from '@components/ContactUs/ContactUs';
import OurProjects from '@components/OurProjects/OurProjects';
import TitlePage from '@components/TitlePage/TitlePage';
import { FC } from 'react';

import styles from './DetailProject.module.scss';
import Link from 'next/link';
import Image from 'next/image';

import project_img from '@assets/projects/detail-project.jpg';
import { TbWorld } from 'react-icons/tb';

const DetailProjectScreen: FC = () => {
  return (
    <>
      <TitlePage titlePage="Detail Project" pathNamePage="Detail Project" />
      <section className={styles.section}>
        <div className={styles.container}>
          <aside className={styles.aside}>
            <ul className={styles.asideContent}>
              <li className={styles.item}>
                <h6>Client</h6>
                <p>Schoolmy Agency</p>
              </li>
              <li className={styles.item}>
                <h6>Long work</h6>
                <p>2 Months</p>
              </li>
              <li className={styles.item}>
                <h6>Category</h6>
                <p>Web Development</p>
              </li>
            </ul>
          </aside>
          <div className={styles.content}>
            <p className={styles.description}>Project Name</p>
            <header className={styles.header}>
              <h3 className={styles.title}>Educational Website Dev</h3>
              <Link className={styles.visitWeb} href={'/'}>
                <h5>
                  <TbWorld size={25} /> Visit Web
                </h5>
              </Link>
            </header>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
              Utenimad minim veniam, quis nostrud exercitation dolore magna.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
              Utenimad minim veniam, quis nostrud exercitation dolore magna
            </p>
            <Image
              className={styles.image}
              src={project_img}
              alt="project-img"
              layout="responsive"
            />
            <h3 className={styles.heading}>Challenge This Project</h3>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
              Utenimad minim veniam, quis nostrud exercitation dolore magna.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
              Utenimad minim veniam, quis nostrud exercitation dolore magna
            </p>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
              Utenimad minim veniam, quis nostrud exercitation dolore magna.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
              Utenimad minim veniam, quis nostrud exercitation dolore magna
            </p>
          </div>
        </div>
      </section>
      <OurProjects />
      <ContactUs />
    </>
  );
};

export default DetailProjectScreen;
