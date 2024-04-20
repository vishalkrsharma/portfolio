import getAllRepos from '@/actions/get-all-repos';
import Intro from '@/components/intro';
import ProjectCard from '@/components/project-card';
import { Repository } from '@/types';

const AllProjects = async () => {
  const repos = await getAllRepos();

  return (
    <div className='bg-background'>
      <main className='w-[90%] max-w-[1280px] mx-auto lg:flex lg:items-start lg:justify-center lg:gap-4'>
        <Intro />
        <main className='py-32 flex-1 flex flex-col gap-16 max-lg:gap-8 lg:w-1/2'>
          {repos.map((repo: Repository) => (
            <ProjectCard
              key={repo.id}
              repo={repo}
            />
          ))}
        </main>
      </main>
    </div>
  );
};

export default AllProjects;
