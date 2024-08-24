'use client';

import { FC, HTMLAttributes, ReactNode, useEffect, useState } from 'react';
import styles from './Button.module.scss';

import cn from 'clsx';

type ButtonVariants = 'pink' | 'blue' | 'white' | 'text';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants;
  className?: string;
  size?: 'medium' | 'big';
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({
  variant = 'blue',
  className,
  size = 'medium',
  children,
  ...props
}) => {
  const [classList, setClassList] = useState<string[]>([]);

  useEffect(() => {
    setClassList(prev => [...prev, styles[size]]);
  }, []);

  switch (variant) {
    case 'blue':
      return (
        <button
          className={cn(styles.button, styles.blue, ...classList, className)}
          {...props}
        >
          {children}
        </button>
      );
    case 'pink':
      return (
        <button
          className={cn(styles.button, styles.pink, ...classList, className)}
          {...props}
        >
          {children}
        </button>
      );
    case 'white':
      return (
        <button
          className={cn(styles.button, styles.white, ...classList, className)}
          {...props}
        >
          {children}
        </button>
      );
    case 'text':
      return (
        <button
          className={cn(styles.button, styles.text, ...classList, className)}
          {...props}
        >
          {children}
        </button>
      );
  }
};

export default Button;
