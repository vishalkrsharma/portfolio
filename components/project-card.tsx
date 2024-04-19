import Link from 'next/link';
import { FaGithub, FaLink } from 'react-icons/fa';

import { Repository } from '@/types';

const ProjectCard = ({ repo }: { repo: Repository }) => {
  return (
    <div className='space-y-4'>
      <div className='flex items-center justify-start'>
        <h2 className='font-semibold tracking-widest'>{repo.name}</h2>
        &nbsp;<span className='font-semibold'>|</span>&nbsp;
        <Link
          href={repo.html_url}
          target='_blank'
        >
          <FaGithub className='text-primary hover:text-text transition-all text-xl' />
        </Link>
        &nbsp;<span className='font-semibold'>|</span>&nbsp;
        <Link
          href={repo.homepage}
          target='_blank'
        >
          <FaLink className='text-primary hover:text-text transition-all text-xl' />
        </Link>
      </div>
      <p className='text-primary text-balance'>{repo.description}</p>
      <div className='flex flex-wrap gap-2'>
        {repo.topics.map((topic) => (
          <div className='text-xs font-bold py-1 px-2 bg-primary rounded-full'>{topic}</div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
