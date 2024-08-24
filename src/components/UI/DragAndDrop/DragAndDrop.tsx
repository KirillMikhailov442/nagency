'use client';

import { FC, HTMLAttributes, useId } from 'react';
import styles from './DragAndDrop.module.scss';

import { IoMdCloudUpload } from 'react-icons/io';

interface DragAndDropProps extends HTMLAttributes<HTMLDivElement> {
  label?: string;
}

const DragAndDrop: FC<DragAndDropProps> = ({ label, ...props }) => {
  const id = useId();
  return (
    <div className={styles.wrapper} id={id} {...props}>
      {label && <p className={styles.label}>{label}</p>}
      <label htmlFor={id} className={styles.zone}>
        <IoMdCloudUpload className={styles.image} size={80} />
        <p className={styles.text}>
          Drag and Drop your file here <br /> Or <span>browse files</span>
        </p>
      </label>
      <input type="file" name={id} style={{ display: 'none' }} />
    </div>
  );
};

export default DragAndDrop;
