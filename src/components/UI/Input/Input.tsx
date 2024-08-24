'use client';

import { FC, HTMLAttributes, useId } from 'react';
import styles from './Input.module.scss';

import cn from 'clsx';

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  value?: string;
  type?: 'text' | 'email' | 'password' | 'tel' | 'url';
  placeholder?: string;
}

const Input: FC<InputProps> = ({
  label,
  error,
  placeholder,
  onChange,
  value,
  type = 'text',
  className,
  ...props
}) => {
  const id = useId();
  return (
    <label className={styles.wrapper} htmlFor={id}>
      {label && <p className={styles.label}>{label}</p>}
      <input
        className={cn(styles.input, className)}
        value={value}
        onChange={onChange}
        name={id}
        placeholder={placeholder}
        type={type}
        {...props}
      />
      {error && <p className={styles.error}>{error}</p>}
    </label>
  );
};

export default Input;
