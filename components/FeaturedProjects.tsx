import HyperLink from './HyperLink';
import { FC } from 'react';
import { PROJECTS } from '../data/Projects';
import Link from 'next/link';
import styles from '@/scss/components/FeaturedProjects.module.scss';
import Tag from './Tag';
import Projects from './Project';

const FeaturedProjects: FC = () => {
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

// const FeaturedProjectsContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 3rem;
// `;

// const AllLink = styled(Link)`
//   font-size: 1.5rem;
//   color: var(--primary);
//   transition: 0.2s all;
//   font-weight: 600;
//   letter-spacing: 0.5rem;
//   &:hover {
//     color: var(--text);
//     text-decoration: underline;
//   }
// `;
