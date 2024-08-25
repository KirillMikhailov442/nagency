import { FC, HTMLAttributes } from 'react';
import styles from './Client.module.scss';
import Image, { StaticImageData } from 'next/image';

interface ClientProps extends HTMLAttributes<HTMLDivElement> {
  image: StaticImageData;
  quote: string;
  text: string;
  name: string;
  profession: string;
  company: StaticImageData;
}

const Client: FC<ClientProps> = ({
  image,
  quote,
  text,
  name,
  profession,
  company,
  ...props
}) => {
  return (
    <div className={styles.client} {...props}>
      <Image
        className={styles.image}
        height={image.height}
        width={image.width}
        src={image}
        alt="client-img"
      />
      <div className={styles.content}>
        <h3 className={styles.quote}>&quote;{quote}&quote;</h3>
        <p className={styles.text}>{text}</p>
        <footer className={styles.footer}>
          <div>
            <h6 className={styles.name}>{name}</h6>
            <p className={styles.profession}>{profession}</p>
          </div>
          <Image className={styles.company} src={company} alt="company" />
        </footer>
      </div>
    </div>
  );
};

export default Client;
