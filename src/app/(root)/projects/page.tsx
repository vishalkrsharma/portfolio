import Hero from './_sections/hero';
import ProjectsShowcase from './_sections/projects-showcase';

export default function ProjectsPage() {
  return (
    <main className='h-screen snap-y snap-mandatory overflow-y-auto scroll-smooth px-4'>
      <Hero />
      <ProjectsShowcase />
    </main>
  );
}
