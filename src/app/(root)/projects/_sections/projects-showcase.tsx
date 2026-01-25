import ProjectCard from '@/app/(root)/projects/_components/project-card';
import { sanityFetch } from '@/sanity/lib/live';
import { PROJECTS_QUERY } from '@/sanity/lib/queries';
import { Project } from '@/types/sanity.types';
import { Telescope } from 'lucide-react';
import Link from 'next/link';

const ProjectsShowcase = async () => {
  const {
    data: projects,
  }: {
    data: Project[];
  } = await sanityFetch({ query: PROJECTS_QUERY });

  return (
    <section className='snap-start snap-always space-y-10 min-h-screen container mx-auto px-4 py-10 relative flex flex-col justify-center items-center gap-8 p-4'>
      <div className='flex justify-between items-center gap-4 w-full'>
        <h2 className='md:text-3xl lg:text-4xl font-semibold'>Featured Projects</h2>
        <Link
          href='/projects/all-projects'
          className='flex justify-center items-center gap-2 hover:underline underline-offset-4 text-sm'
        >
          <Telescope />
          Show All
          <span className='sr-only'>Show All Projects</span>
        </Link>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full'>
        {projects.map((project) => (
          <ProjectCard
            key={project.slug.current}
            project={project}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsShowcase;
