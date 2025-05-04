import Hero from '@/app/(root)/projects/_sections/hero';
import ProjectsShowcase from '@/app/(root)/projects/_sections/projects-showcase';
import { BackgroundBeams } from '@/components/ui/background-beams';

const ProjectsPage = () => {
  return (
    <main className='min-h-screen'>
      <BackgroundBeams className='fixed inset-0 h-screen' />
      <Hero />
      <ProjectsShowcase />
    </main>
  );
};

export default ProjectsPage;
