import { FC } from 'react';
import styles from './Policy.module.scss';
import TitlePage from '@components/TitlePage/TitlePage';

const PolicyScreen: FC = () => {
  return (
    <>
      <TitlePage
        titlePage="Privacy Policy"
        pathNamePage="Last Update Dec 18, 2022"
        isBreadcrumb={false}
      />
      <section className={styles.section}>
        <div className={styles.container}>
          <p className={styles.text}>
            Dui sed elementum, ornare etiam mauris purus eu quam. Commodo
            posuere duis pellentesque vel etiam turpis sed. Fermentum eleifend
            ut neque, fringilla nisl convallis. Nibh tincidunt diam aliquam, et.
            Adipiscing consequat amet, at mattis magna amet, urna duis.
          </p>

          <h2 className={styles.title}>Licensing Policy</h2>
          <p className={styles.text}>
            Lobortis in cras orci, ultricies egestas rhoncus integer. Orci erat
            adipiscing massa sed non. Vitae quisque accumsan tellus convallis
            enim, at lacus, faucibus vel. Viverra ridiculus etiam pulvinar
            convallis sed. Metus enim, in iaculis eu vitae laoreet eget. Lacinia
            mauris vulputate tortor, quis auctor tortor. Lacus, nullam enim
            elementum.
          </p>

          <h5 className={styles.heading}>
            Pellentesque dictumst amet cras eget. Nunc elementum, fames non
            venenatis:
          </h5>
          <ul className={styles.list}>
            <li>
              Dui sed elementum, ornare etiam mauris purus eu quam. Commodo
              posuere duis pellentesque vel etiam.
            </li>
            <li>
              Dui sed elementum, ornare etiam mauris purus eu quam. Commodo
              posuere duis pellentesque vel etiam.
            </li>
            <li>
              Dui sed elementum, ornare etiam mauris purus eu quam. Commodo
              posuere duis pellentesque vel etiam.
            </li>
            <li>
              Dui sed elementum, ornare etiam mauris purus eu quam. Commodo
              posuere duis pellentesque vel etiam.
            </li>
          </ul>

          <h5 className={styles.heading}>
            Tempor, aliquam egestas faucibus euismod orci, mattis faucibus:
          </h5>
          <ul className={styles.list}>
            <li>
              Dui sed elementum, ornare etiam mauris purus eu quam. Commodo
              posuere duis pellentesque vel etiam.
            </li>
            <li>
              Dui sed elementum, ornare etiam mauris purus eu quam. Commodo
              posuere duis pellentesque vel etiam.
            </li>
          </ul>

          <h2 className={styles.title}>Additional Policy</h2>
          <p className={styles.text}>
            Lobortis in cras orci, ultricies egestas rhoncus integer. Orci erat
            adipiscing massa sed non. Vitae quisque accumsan tellus convallis
            enim, at lacus, faucibus vel. Viverra ridiculus etiam pulvinar
            convallis sed. Metus enim, in iaculis eu vitae laoreet eget. Lacinia
            mauris vulputate tortor, quis auctor tortor. Lacus, nullam enim
            elementum.
          </p>

          <h5 className={styles.heading}>
            Tempor, aliquam egestas faucibus euismod orci, mattis faucibus:
          </h5>
          <ul className={styles.list}>
            <li>
              Dui sed elementum, ornare etiam mauris purus eu quam. Commodo
              posuere duis pellentesque vel etiam.
            </li>
            <li>
              Dui sed elementum, ornare etiam mauris purus eu quam. Commodo
              posuere duis pellentesque vel etiam.
            </li>
          </ul>

          <h5 className={styles.heading}>
            Metus, sodales sit risus, orci ultricies gravida ut. Quisque quisque
            lorem euismod vulputat.
          </h5>
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

export default PolicyScreen;
