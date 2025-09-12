import Hero from '@/app/(root)/projects/_sections/hero';
import ProjectsShowcase from '@/app/(root)/projects/_sections/projects-showcase';

const ProjectsPage = () => {
  return (
    <main className='min-h-screen container px-4 mx-auto'>
      <Hero />
      <ProjectsShowcase />
    </main>
  );
};

export default ProjectsPage;
