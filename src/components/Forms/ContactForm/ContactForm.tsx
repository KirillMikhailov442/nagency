import { FC } from 'react';
import styles from './ContactForm.module.scss';
import Input from '@components/UI/Input/Input';
import Textarea from '@components/UI/Textarea/Textarea';
import Button from '@components/UI/Button/Button';

import { FaLocationDot } from 'react-icons/fa6';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoMail } from 'react-icons/io5';

const ContactForm: FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.contact}>
        <div className={styles.info}>
          <p className={styles.description}>Contact Us</p>
          <h2 className={styles.title}>
            Contact Our Team, Feel free to talk about anything.
          </h2>
          <ul className={styles.list}>
            <li className={styles.item}>
              <span className={styles.icon}>
                <FaLocationDot />
              </span>
              2715 Ash Dr. San Jose, South Dakota 83475
            </li>
            <li className={styles.item}>
              <span className={styles.icon}>
                <BsFillTelephoneFill />
              </span>
              (252) 555-0126
            </li>
            <li className={styles.item}>
              <span className={styles.icon}>
                <IoMail />
              </span>
              example@gmail.com
            </li>
          </ul>
        </div>
        <form className={styles.form}>
          <Input style={{ width: '100%' }} placeholder="Name" />
          <div className={styles.row}>
            <Input placeholder="Email" type="email" />
            <Input placeholder="Phone" type="tel" />
          </div>
          <Textarea className={styles.textarea} placeholder="Your Quenstions" />
          <Button className={styles.button} size="big">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
