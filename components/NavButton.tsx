import { FC, ReactNode } from 'react';
import Link from 'next/link';
import styles from '@/scss/components/NavButton.module.scss';

interface NavButtonProps {
  children: ReactNode;
  $isActive: boolean;
  ariaLabel: string;
  newTab?: boolean;
  href: string;
}

const NavButton: FC<NavButtonProps> = ({ children, $isActive, ariaLabel, newTab, href }) => {
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

// const NavButtonContainer = styled(Link)<NavButtonContainerProps>`
//   display: block;
//   padding: 0.5rem 2rem;
//   background-color: ${(props) => (props.$isActive ? 'var(--text)' : 'var(--primary)')};
//   color: var(--background);
//   font-size: 1.5rem;
//   font-weight: 600;
//   transition: all 0.2s;
//   border-radius: var(--borRad);
//   @media (pointer: fine) {
//     cursor: pointer;
//     &:hover {
//       background-color: var(--text);
//     }
//   }
// `;
