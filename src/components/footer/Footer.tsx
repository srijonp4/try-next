import styles from './footer.module.css';
import Link from 'next/link';
const Footer = () => {
  return (
    <div className={styles.container}>
      <Link href="https://github.com/srijonp4/try-next" target="_blank">
        <div className={styles.logo}>srijonp4</div>
      </Link>
      <div className={styles.text}>
        &copy; {new Date().getFullYear()} Made by Srijon. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
