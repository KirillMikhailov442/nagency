import { FC } from 'react';
import styles from './Loading.module.scss';
import { Spinner } from '@chakra-ui/react';

const LoadingScreen: FC = () => {
  return (
    <section className={styles.section}>
      <Spinner size="xl" color="blue.500" />
    </section>
  );
};

export default LoadingScreen;
