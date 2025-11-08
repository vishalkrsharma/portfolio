import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { GitHubRepo } from '@/types/github-repo.types';
import { FolderGit2 } from 'lucide-react';
import Link from 'next/link';

const ProjectCard = ({ project }: { project: GitHubRepo }) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href={project.html_url}
          className='group'
          target='_blank'
        >
          <div className='relative bg-neutral-100 dark:bg-neutral-900 rounded-2xl border p-2 md:rounded-3xl group-hover:bg-neutral-200 dark:group-hover:bg-neutral-900 transition-colors duration-700'>
            <div className='relative flex justify-start gap-6 overflow-hidden rounded-2xl p-3 bg-background'>
              <FolderGit2 />
              <h3 className='text-lg font-semibold text-balance'>{project.name}</h3>
            </div>
          </div>
        </Link>
      </TooltipTrigger>
      <TooltipContent
        side='bottom'
        className='max-w-xs py-3'
      >
        <p>{project.description || 'No data available.'}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default ProjectCard;
