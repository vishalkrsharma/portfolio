import { Project } from '@/types/sanity.types';
import { Github, LinkIcon } from 'lucide-react';
import Link from 'next/link';

const ProjectHeader = ({
  title,
  liveUrls,
  repositoryUrls,
}: {
  title: Project['title'];
  liveUrls: Project['liveUrls'];
  repositoryUrls: Project['repositoryUrls'];
}) => {
  return (
    <header className='flex justify-between items-center'>
      <h1 className='text-4xl font-doto font-black'>{title}</h1>
      <nav className='flex justify-center items-center gap-4'>
        {liveUrls &&
          liveUrls.length > 0 &&
          liveUrls.map((url) => (
            <Link
              href={url}
              key={url}
              target='_blank'
              className='border rounded-full p-3 hover:bg-accent/10 transition-colors duration-200'
            >
              <LinkIcon size={20} />
            </Link>
          ))}
        {repositoryUrls &&
          repositoryUrls.length > 0 &&
          repositoryUrls.map((url) => (
            <Link
              href={url}
              key={url}
              target='_blank'
              className='border rounded-full p-3 hover:bg-accent/10 transition-colors duration-200'
            >
              <Github size={20} />
            </Link>
          ))}
      </nav>
    </header>
  );
};

export default ProjectHeader;
