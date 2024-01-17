import Link from 'next/link';

import PROJECTS from '../data/Projects';
import styles from '@/scss/components/FeaturedProjects.module.scss';
import Projects from './Project';

const FeaturedProjects = () => {
  return (
    <section className={styles.featuredProjectsContainer}>
      <div className={styles.header}>Featured Projects</div>
      {PROJECTS.map(
        (project, idx) =>
          project.isFeatured && (
            <Projects
              project={project}
              key={idx}
            />
          )
      )}
      <Link
        className={styles.projectsLink}
        href='/projects'
      >
        All Projects
      </Link>
    </section>
  );
};

export default FeaturedProjects;
