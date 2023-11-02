import { PROJECTS } from '@/data/Projects';
import styles from '@/scss/pages/ProjectsPage.module.scss';
import Project from '@/components/Project';
import variables from '@/scss/abstracts/_variables.module.scss';
import ProjectsHeader from '@/components/ProjectsHeader';

const ProjectsPage = () => {
  return (
    <div className={styles.projectsPageContainer}>
      <ProjectsHeader />
      <section>
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
