'use client';

import { FC, HTMLAttributes, useState } from 'react';
import styles from './TitlePage.module.scss';
import { usePathname } from 'next/navigation';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';

interface TitlePageProps extends HTMLAttributes<HTMLDivElement> {
  titlePage?: string;
  pathNamePage?: string;
  isBreadcrumb?: boolean;
}

const TitlePage: FC<TitlePageProps> = ({
  titlePage,
  pathNamePage,
  isBreadcrumb = true,
  ...props
}) => {
  const path = usePathname().substring(1);
  const [title] = useState(titlePage ?? path);
  const [pathName] = useState(pathNamePage ?? path);

  return (
    <section className={styles.section} {...props}>
      <div className={styles.container}>
        <h1 className={styles.pageName}>{title}</h1>
        {isBreadcrumb ? (
          <Breadcrumb className={styles.breadcrumb}>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink className={styles.link}>
                {pathName}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        ) : (
          <nav className={styles.breadcrumb}>{pathNamePage}</nav>
        )}
      </div>
    </section>
  );
};

export default TitlePage;
