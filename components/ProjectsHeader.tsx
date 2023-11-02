'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import variables from '@/scss/abstracts/_variables.module.scss';
import styles from '@/scss/components/ProjectsHeader.module.scss';

const ProjectsHeader = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <header className={styles.header}>
      <Link href='/'>
        <FaArrowLeft
          size={30}
          style={{ transition: 'all .2s', cursor: 'pointer', fill: isHovered ? variables.text : variables.primary }}
          onMouseEnter={() => handleMouseEnter()}
          onMouseLeave={() => handleMouseLeave()}
        />
      </Link>
      <h1 className={styles.title}>All Projects</h1>
    </header>
  );
};

export default ProjectsHeader;
