import Link from 'next/link';
import { ReactNode } from 'react';
import styles from '@/scss/components/NavButton.module.scss';

const NavButton = ({
  children,
  $isActive,
  ariaLabel,
  newTab,
  href,
}: {
  children: ReactNode;
  $isActive: boolean;
  ariaLabel: string;
  newTab?: boolean;
  href: string;
}) => {
  return (
    <Link
      className={`${styles.navButtonContainer} ${$isActive && styles['active']}`}
      aria-label={ariaLabel}
      target={newTab ? '_blank' : ''}
      href={href}
    >
      {children}
    </Link>
  );
};

export default NavButton;

interface NavButtonContainerProps {
  $isActive: boolean;
}
