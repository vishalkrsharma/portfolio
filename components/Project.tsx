import styles from '@/scss/components/Project.module.scss';
import Tag from './Tag';
import HyperLink from './HyperLink';
import Project from '@/models/Project';

const Project = ({ project }: { project: Project }) => {
  return (
    <article className={styles.project}>
      <div
        className={styles.project__name}
        style={{ fontSize: '1.75rem' }}
      >
        {project.title}
      </div>
      <ul className={styles.project__info}>
        {project.info.map((inf, idx) => (
          <li
            className={styles.project__info__item}
            key={idx}
          >
            {inf}
          </li>
        ))}
      </ul>
      <div className={styles.project__tags}>
        {project.techTags.map((tag, idx) => (
          <Tag key={idx}>{tag}</Tag>
        ))}
      </div>
      <div className={styles.linksContainer}>
        {project.projectLink.map((link, idx) => (
          <HyperLink
            link={link.link}
            gh={false}
          >
            {link.label}
          </HyperLink>
        ))}
        {project.githubLinks.map((link, idx) => (
          <HyperLink
            key={idx}
            link={link.link}
            gh={true}
          >
            {link.label}
          </HyperLink>
        ))}
      </div>
    </article>
  );
};

export default Project;
