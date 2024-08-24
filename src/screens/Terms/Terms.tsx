import TitlePage from '@components/TitlePage/TitlePage';
import { FC } from 'react';

import styles from './Terms.module.scss';

const TermsScreen: FC = () => {
  return (
    <>
      <TitlePage
        titlePage="Terms of Conditions"
        pathNamePage="Last Update Dec 18, 2022"
        isBreadcrumb={false}
      />
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.title}>General Information</h2>
          <p className={styles.text}>
            Dui sed elementum, ornare etiam mauris purus eu quam. Commodo
            posuere duis pellentesque vel etiam turpis sed. Fermentum eleifend
            ut neque, fringilla nisl convallis. Nibh tincidunt diam aliquam, et.
            Adipiscing consequat amet, at mattis magna amet, urna duis. Ut purus
            tincidunt viverra faucibus cursus convallis aliquam. Amet mi nibh
            sed neque, phasellus neque. Eget imperdiet eget ut laoreet cursus
            enim. Placerat vitae id tempor tempus ullamcorper arcu fermentum
            viverra. Diam morbi tellus amet eget consequat. Volutpat enim tortor
            ut in.
          </p>

          <h3 className={styles.heading}>1. Terms</h3>
          <p className={styles.text}>
            Dui sed elementum, ornare etiam mauris purus eu quam. Commodo
            posuere duis pellentesque vel etiam turpis sed. Fermentum eleifend
            ut neque, fringilla nisl convallis. Nibh tincidunt diam aliquam, et.
            Adipiscing consequat amet, at mattis magna amet, urna duis. Ut purus
            tincidunt viverra faucibus cursus convallis aliquam. Amet mi nibh
            sed neque, phasellus neque. Eget imperdiet eget ut laoreet cursus
            enim. Placerat vitae id tempor tempus ullamcorper arcu fermentum
            viverra. Diam morbi tellus amet eget consequat. Volutpat enim tortor
            ut in.
          </p>

          <h3 className={styles.heading}>2. User License</h3>
          <p className={styles.text}>
            Dui sed elementum, ornare etiam mauris purus eu quam. Commodo
            posuere duis pellentesque vel etiam turpis sed. Fermentum eleifend
            ut neque, fringilla nisl convallis. Nibh tincidunt diam aliquam, et.
            Adipiscing consequat amet, at mattis magna amet, urna duis. Ut purus
            tincidunt viverra faucibus cursus convallis aliquam. Amet mi nibh
            sed neque, phasellus neque. Eget imperdiet eget ut laoreet cursus
            enim. Placerat vitae id tempor tempus ullamcorper arcu fermentum
            viverra. Diam morbi tellus amet eget consequat. Volutpat enim tortor
            ut in.
          </p>
          <ul className={styles.list}>
            <li>
              Accumsan feugiat vestibulum, sollicitudin aliquet aliquam pretium
              eu habitant lorem
            </li>
            <li>
              Accumsan feugiat vestibulum, sollicitudin aliquet aliquam pretium
              eu habitant lorem
            </li>
            <li>
              Accumsan feugiat vestibulum, sollicitudin aliquet aliquam pretium
              eu habitant lorem
            </li>
            <li>
              Accumsan feugiat vestibulum, sollicitudin aliquet aliquam pretium
              eu habitant lorem
            </li>
            <li>
              Accumsan feugiat vestibulum, sollicitudin aliquet aliquam pretium
              eu habitant lorem
            </li>
            <li>
              Accumsan feugiat vestibulum, sollicitudin aliquet aliquam pretium
              eu habitant lorem
            </li>
            <li>
              Accumsan feugiat vestibulum, sollicitudin aliquet aliquam pretium
              eu habitant lorem
            </li>
          </ul>
          <p className={styles.text}>
            Dui sed elementum, ornare etiam mauris purus eu quam. Commodo
            posuere duis pellentesque vel etiam turpis sed. Fermentum eleifend
            ut neque, fringilla nisl convallis. Nibh tincidunt diam aliquam, et.
            Adipiscing consequat amet, at mattis magna amet, urna duis. Ut purus
            tincidunt viverra faucibus cursus convallis aliquam. Amet mi nibh
            sed neque, phasellus neque. Eget imperdiet eget ut laoreet cursus
            enim. Placerat vitae id tempor tempus ullamcorper arcu fermentum
            viverra. Diam morbi tellus amet eget consequat. Volutpat enim tortor
            ut in.
          </p>

          <h3 className={styles.heading}>3. Information General</h3>
          <p className={styles.text}>
            Dui sed elementum, ornare etiam mauris purus eu quam. Commodo
            posuere duis pellentesque vel etiam turpis sed. Fermentum eleifend
            ut neque, fringilla nisl convallis. Nibh tincidunt diam aliquam, et.
            Adipiscing consequat amet, at mattis magna amet, urna duis. Ut purus
            tincidunt viverra faucibus cursus convallis aliquam. Amet mi nibh
            sed neque, phasellus neque. Eget imperdiet eget ut laoreet cursus
            enim. Placerat vitae id tempor tempus ullamcorper arcu fermentum
            viverra. Diam morbi tellus amet eget consequat. Volutpat enim tortor
            ut in.
          </p>
        </div>
      </section>
    </>
  );
};

export default TermsScreen;
