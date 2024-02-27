'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './links.module.css';
import NavLink from './navlink/NavLink';
const links = [
  {
    title: 'HomePage',
    path: '/',
  },
  {
    title: 'Contact',
    path: '/contact',
  },
  {
    title: 'Blog',
    path: '/blog',
  },
  {
    title: 'About',
    path: '/about',
  },
];
const Links = () => {
  const [open, setOpen] = useState(false);

  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => {
          return <NavLink link={link} key={link.title} />;
        })}
        {session ? (
          <>
            {isAdmin && <NavLink link={{ title: 'Admin🐻‍❄️', path: '/admin' }} />}
            <button className={styles.logout}>Logout🚪</button>
          </>
        ) : (
          <NavLink link={{ title: 'login🚪', path: '/login' }} />
        )}
      </div>
      <Image
        className={styles.menuButton}
        onClick={() => {
          setOpen((prev) => !prev);
        }}
        src={!open ? `/menu.svg` : `/close-menu.svg`}
        alt="menu"
        width={40}
        height={40}
      />

      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink link={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
