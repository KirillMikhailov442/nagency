import { FC } from 'react';
import styles from './JoinForm.module.scss';
import Input from '@components/UI/Input/Input';
import Textarea from '@components/UI/Textarea/Textarea';
import Button from '@components/UI/Button/Button';

import { FaLocationDot } from 'react-icons/fa6';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoMail } from 'react-icons/io5';
import { Select } from '@chakra-ui/react';
import DragAndDrop from '@components/UI/DragAndDrop/DragAndDrop';

const JoinForm: FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.info}>
          <p className={styles.description}>Join us?</p>
          <h2 className={styles.title}>Join our team!</h2>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad
            minim veniam, quis nostrud exercitation dolore magna
          </p>
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
          <Select className={styles.select} variant={'outline'}>
            <option hidden>Position applied for</option>
            <option>One</option>
            <option>Two</option>
            <option>Tree</option>
          </Select>
          <Input
            style={{ width: '100%' }}
            placeholder="Portfolio link"
            type="url"
          />
          <DragAndDrop label="Upload your CV" />
          <Button className={styles.button} size="big">
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
};

export default JoinForm;
