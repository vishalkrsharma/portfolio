import ProjectCard from '@/app/(root)/projects/all-projects/_components/project-card';
import { getAllProjects } from '@/services/projects.services';

const AllProjectsShowcase = async () => {
  const allProjects = await getAllProjects();

  if (!allProjects?.success) {
    throw new Error(allProjects?.message);
  }

  return (
    <section className='flex justify-center items-start flex-wrap gap-4 mx-auto'>
      {allProjects?.data.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
        />
      ))}
    </section>
  );
};

export default AllProjectsShowcase;
