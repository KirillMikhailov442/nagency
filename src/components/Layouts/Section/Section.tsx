import { FC, HTMLAttributes, ReactNode } from 'react';
import styles from './Section.module.scss';

import cn from 'clsx';

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  description: string;
  title: string;
  children: ReactNode;
}

const Section: FC<SectionProps> = ({
  description,
  title,
  className,
  children,
  ...props
}) => {
  return (
    <section className={cn(styles.section, className)} {...props}>
      <div className={styles.container}>
        <header className={styles.header}>
          <p className={styles.description}>{description}</p>
          <h2 className={styles.title}>{title}</h2>
        </header>
        {children}
      </div>
    </section>
  );
};

export default Section;
