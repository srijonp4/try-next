'use client';
import Link from 'next/link';
import styles from './navlink.module.css';
import { usePathname } from 'next/navigation';
interface NavLinkProps {
  link: { title: string; path: string };
}

const NavLink = ({ link }: NavLinkProps) => {
  const pathName = usePathname();
  return (
    <Link
      className={`${styles.container} ${
        pathName === link.path && styles.active
      }`}
      href={link.path}
    >
      {link.title}
    </Link>
  );
};

export default NavLink;
