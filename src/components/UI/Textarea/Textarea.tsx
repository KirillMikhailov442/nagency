import { FC, HTMLAttributes } from 'react';
import styles from './Textarea.module.scss';

import cn from 'clsx';

interface TextareaProps extends HTMLAttributes<HTMLTextAreaElement> {
  placeholder?: string;
}

const Textarea: FC<TextareaProps> = ({ className, ...props }) => (
  <textarea className={cn(styles.textarea, className)} {...props}></textarea>
);

export default Textarea;
