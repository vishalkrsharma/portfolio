import Link from 'next/link';

import { Repository } from '@/types';
import ProjectCard from '@/components/project-card';
import getStarredRepos from '@/actions/get-starred-repos';
import { FaArrowRight } from 'react-icons/fa';

const Projects = async () => {
  const repos = await getStarredRepos();

  return (
    <section className='space-y-12'>
      <h1 className='text-text text-xl font-semibold tracking-[.25rem]'>Projects</h1>
      {repos.map((repo: Repository) => (
        <ProjectCard
          key={repo.id}
          repo={repo}
        />
      ))}
      <Link
        href='/all-projects'
        className='mt-4 py-1 space-x-1 border-spacing-5 group hover:border-text transition-all hover:border-b'
      >
        <span className='font-semibold text-primary group-hover:text-text transition-all'>All projects</span>
        <FaArrowRight className='h-3 w-0 text-primary inline font-thin mb-1 group-hover:text-text transition-all group-hover:w-3' />
      </Link>
    </section>
  );
};

export default Projects;
