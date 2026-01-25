import Hero from './_sections/hero';
import ProjectsShowcase from './_sections/projects-showcase';

export default function ProjectsPage() {
  return (
    <main className='h-[100dvh] overflow-y-auto snap-y snap-mandatory scroll-smooth'>
      <Hero />
      <ProjectsShowcase />
      {/* Invisible snap point at the end of the section */}
      <div className='absolute bottom-0 h-px w-full snap-end pointer-events-none' />
    </main>
  );
}
