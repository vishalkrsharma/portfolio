import { GitHubRepo } from '@/types/github-repo.types';
import { FolderGit2 } from 'lucide-react';
import Link from 'next/link';

const ProjectCard = ({ project }: { project: GitHubRepo }) => {
  console.log(project);

  return (
    <Link
      href={project.html_url}
      className='group block w-full'
      target='_blank'
    >
      <div className='relative bg-neutral-100 dark:bg-neutral-900 h-full rounded-2xl border p-2 md:rounded-3xl group-hover:bg-neutral-200 dark:group-hover:bg-neutral-900 transition-colors duration-700'>
        <div className='relative flex justify-start gap-6 overflow-hidden rounded-2xl p-3 bg-background'>
          <FolderGit2 />
          <h3 className='text-lg font-semibold text-balance'>{project.name}</h3>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
