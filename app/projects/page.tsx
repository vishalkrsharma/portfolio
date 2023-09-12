'use client';

import { FC, useState } from 'react';
import { PROJECTS } from '@/data/Projects';
import { FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';
import styles from '@/scss/pages/ProjectsPage.module.scss';
import Project from '@/components/Project';
import variables from '@/scss/abstracts/_variables.module.scss';

const ProjectsPage: FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className={styles.projectsPageContainer}>
      <div className={styles.header}>
        <Link href='/'>
          <FaArrowLeft
            size={30}
            style={{ transition: 'all .2s', cursor: 'pointer', fill: isHovered ? variables.text : variables.primary }}
            onMouseEnter={() => handleMouseEnter()}
            onMouseLeave={() => handleMouseLeave()}
          />
        </Link>
        <div className={styles.title}>All Projects</div>
      </div>
      {PROJECTS.map((project, idx) => (
        <Project
          project={project}
          key={idx}
        />
      ))}
    </div>
  );
};

export default ProjectsPage;

// const AllProjectsPageContainer = styled.div`
//   margin: 10rem auto;
//   width: min(90%, 800px);
//   display: flex;
//   flex-direction: column;
//   @media (min-width: 1024px) {
//     justify-content: center;
//     align-items: start;
//     gap: 1rem;
//   }
// `;
// const HeaderContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 2rem;
//   margin-bottom: 5rem;
// `;
