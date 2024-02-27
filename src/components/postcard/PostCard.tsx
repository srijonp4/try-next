import React from 'react';
import styles from './postcard.module.css';
import Image from 'next/image';
import Link from 'next/link';
type Props = {};

const PostCard = (props: Props) => {
  return (
    <div>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src="/62.png" fill alt="" className="styles.img" />
        </div>
        <span className={styles.date}>01.03.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>desc</p>
        <Link href="/blog/post1">read more</Link>
      </div>
    </div>
  );
};

export default PostCard;
