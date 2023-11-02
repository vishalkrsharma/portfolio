'use client';

import { ReactNode, useState } from 'react';
import { FaLink, FaGithub } from 'react-icons/fa';
import styles from '@/scss/components/HyperLink.module.scss';
import Link from 'next/link';
import variables from '@/scss/abstracts/_variables.module.scss';

const HyperLink = ({ children, link, gh }: { children: ReactNode; link: string; gh: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Link
      className={styles.hyperLinkContainer}
      href={link}
      target='_blank'
    >
      {gh ? (
        <FaGithub
          size={15}
          style={{ transition: 'all .2s', cursor: 'pointer', fill: isHovered ? variables.text : variables.primary }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      ) : (
        <FaLink
          size={15}
          style={{ transition: 'all .2s', cursor: 'pointer', fill: isHovered ? variables.textRgb : variables.primaryRgb }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      )}

      {children}
    </Link>
  );
};

export default HyperLink;
