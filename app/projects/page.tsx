import PROJECTS from '@/data/Projects';
import styles from '@/scss/pages/ProjectsPage.module.scss';
import Project from '@/components/Project';
import ProjectsHeader from '@/components/ProjectsHeader';

const ProjectsPage = () => {
  return (
    <div
      className={styles.projectsPageContainer}
      data-testid='projectspage'
    >
      <ProjectsHeader />
      <section className={styles.projectsContainer}>
        {PROJECTS.map((project, idx) => (
          <Project
            project={project}
            key={idx}
          />
        ))}
      </section>
    </div>
  );
};

export default ProjectsPage;
