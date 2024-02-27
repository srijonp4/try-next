// 'use client';
import React from 'react';
import styles from './contact.module.css';
import Image from 'next/image';
import dynamic from 'next/dynamic';
const HydrationTestNoSSR = dynamic(() => import('@/HydrationTest'), {
  ssr: false,
});

const ContactPage = () => {
  const a = Math.random();
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/phones.svg" alt="" fill className={styles.img} />
      </div>
      {/* <div suppressHydrationWarning>{a}</div>
      <HydrationTestNoSSR /> */}
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number (Optional)" />
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="Message"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
