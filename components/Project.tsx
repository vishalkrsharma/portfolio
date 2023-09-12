import styles from '@/scss/components/Project.module.scss';
import { FC } from 'react';
import Tag from './Tag';
import HyperLink from './HyperLink';

interface Project {
  title: string;
  info: string;
  projectLink: string;
  githubLinks: string[];
  techTags: string[];
  isFeatured: boolean;
}

interface ProjectProps {
  project: Project;
}

const Project: FC<ProjectProps> = ({ project }) => {
  return (
    <div className={styles.project}>
      <div
        className={styles.project__name}
        style={{ fontSize: '1.75rem' }}
      >
        {project.title}
      </div>
      <div className={styles.project__info}>{project.info}</div>
      <div className={styles.project__tags}>
        {project.techTags.map((tag, idx) => (
          <Tag key={idx}>{tag}</Tag>
        ))}
      </div>

      <div className={styles.linksContainer}>
        <HyperLink
          link={project.projectLink}
          gh={false}
        >
          Project
        </HyperLink>
        {project.githubLinks.length === 1 ? (
          <HyperLink
            link={project.githubLinks[0]}
            gh={true}
          >
            Github
          </HyperLink>
        ) : (
          project.githubLinks.map((link, idx) => (
            <HyperLink
              key={idx}
              link={link}
              gh={true}
            >
              {idx === 0 ? 'Client' : 'Server'}
            </HyperLink>
          ))
        )}
      </div>
    </div>
  );
};

export default Project;
