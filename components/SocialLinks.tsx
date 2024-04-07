import Link from 'next/link';
import { SiLeetcode } from 'react-icons/si';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

import { cn } from '@/lib/utils';

const SocialLinks = () => {
  return (
    <div className='space-y-6'>
      <div className='space-x-4'>
        <Link
          className={cn('py-2 px-4 bg-text text-background font-semibold transition-all rounded-sm hover:bg-text')}
          href='/'
          aria-label='Home'
        >
          Home
        </Link>
        <Link
          className={cn('py-2 px-4 bg-primary text-background font-semibold transition-all rounded-sm hover:bg-text')}
          href='https://drive.google.com/file/d/1bM1gYCO1n7mhEaQSzmMw5P8b--nOpkjC/view?usp=drive_link'
          target='_blank'
          aria-label='Resume'
        >
          Resume
        </Link>
      </div>

      <div className='flex justify-start items-stretch gap-3'>
        <Link
          href='https://www.linkedin.com/in/vishalkrsharma/'
          target='_blank'
        >
          <FaLinkedin className='hover:text-text text-4xl' />
        </Link>
        <Link
          href='https://www.github.com/vishalkrsharma'
          target='_blank'
        >
          <FaGithub className='hover:text-text text-4xl' />
        </Link>
        <Link
          href='https://www.leetcode.com/vishalkrsharma'
          target='_blank'
        >
          <SiLeetcode className='hover:text-text text-4xl' />
        </Link>
      </div>
    </div>
  );
};

export default SocialLinks;
