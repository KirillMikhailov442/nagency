'use client';

import { FC } from 'react';
import styles from './Says.module.scss';
import 'react-multi-carousel/lib/styles.css';
import Carousel, { DotProps } from 'react-multi-carousel';
import Client from '../Client/Client';

import cn from 'clsx';

import client_img_1 from '@assets/companies/img-1.jpg';
import client_img_2 from '@assets/companies/img-2.jpg';
import company_img from '@assets/companies/img-3.png';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 2,
    slidesToSlide: 2,
  },
  tablet: {
    breakpoint: { max: 1200, min: 464 },
    items: 1,
    slidesToSlide: 1,
  },
};

const CustomDot: FC<DotProps> = ({ onClick, active, ...props }) => {
  return (
    <li
      className={cn(styles.dot, { [`${styles.dotActive}`]: active })}
      onClick={onClick}
      {...props}
    ></li>
  );
};

const Says: FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.description}>What They Says</p>
        <h2 className={styles.title}>
          There are also many large companies that collaborate with us
        </h2>
      </div>
      <Carousel
        swipeable
        draggable={false}
        showDots
        arrows={false}
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={8000}
        keyBoardControl
        customDot={<CustomDot />}
        dotListClass={styles.dotList}
        className={styles.carousel}
      >
        <Client
          image={client_img_1}
          quote="Maximize Your Reach with Marketing - Unlock Your Business's Growth Potential!"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          name="Albert Fox"
          profession="CEO Dream Team"
          company={company_img}
        />
        <Client
          image={client_img_2}
          quote="Maximize Your Reach with Marketing - Unlock Your Business's Growth Potential!"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          name="Albert Fox"
          profession="CEO Dream Team"
          company={company_img}
        />
        <Client
          image={client_img_1}
          quote="Maximize Your Reach with Marketing - Unlock Your Business's Growth Potential!"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          name="Albert Fox"
          profession="CEO Dream Team"
          company={company_img}
        />
        <Client
          image={client_img_2}
          quote="Maximize Your Reach with Marketing - Unlock Your Business's Growth Potential!"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          name="Albert Fox"
          profession="CEO Dream Team"
          company={company_img}
        />
        <Client
          image={client_img_1}
          quote="Maximize Your Reach with Marketing - Unlock Your Business's Growth Potential!"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          name="Albert Fox"
          profession="CEO Dream Team"
          company={company_img}
        />
        <Client
          image={client_img_2}
          quote="Maximize Your Reach with Marketing - Unlock Your Business's Growth Potential!"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          name="Albert Fox"
          profession="CEO Dream Team"
          company={company_img}
        />
      </Carousel>
    </section>
  );
};

export default Says;
