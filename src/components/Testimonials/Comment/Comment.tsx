import { FC, HTMLAttributes } from 'react';
import styles from './Comment.module.scss';
import Image, { StaticImageData } from 'next/image';

interface CommentProps extends HTMLAttributes<HTMLDivElement> {
  avatar: StaticImageData;
  nickname: string;
  text: string;
}

const Comment: FC<CommentProps> = ({ avatar, text, nickname, ...props }) => {
  return (
    <div className={styles.comment} {...props}>
      <Image
        className={styles.avatar}
        src={avatar}
        alt={`avatar-${nickname}`}
        width={52}
        height={52}
      />
      <div className={styles.details}>
        <p className={styles.text}>
          {text} - @{nickname}
        </p>
      </div>
    </div>
  );
};

export default Comment;
