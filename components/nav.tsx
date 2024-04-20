'use client';

import { useState } from 'react';

import { cn } from '@/lib/utils';

const Nav = () => {
  const [isActive, setIsActive] = useState('about');

  const handleScroll = () => {
    let pos = window.scrollY;
    if (0 <= pos && pos < 260) {
      setIsActive('about');
    } else if (261 <= pos && pos < 687) {
      setIsActive('education');
    } else if (688 <= pos && pos < 1674) {
      setIsActive('skills');
    } else if (1675 <= pos && pos < 4000) {
      setIsActive('projects');
    }
  };

  return (
    <>
      <div className='flex flex-col justify-between items-start gap-2 max-lg:hidden'>
        <div
          className={cn(
            'cursor-pointer text-primary transition-all font-semibold flex justify-start items-center gap-4 group',
            isActive === 'about' && 'text-text'
          )}
          onClick={() => {
            setIsActive('about');
            // window.scroll({ top: 0, behavior: 'smooth' });
          }}
        >
          <div className={cn('bg-primary transition-all w-16 h-[1px] group-hover:w-24', isActive === 'about' && 'w-24 bg-text')} />
          About
        </div>
        <div
          className={cn(
            'cursor-pointer text-primary transition-all font-semibold flex justify-start items-center gap-4 group',
            isActive === 'skills' && 'text-text'
          )}
          onClick={() => {
            setIsActive('skills');
            // window.scroll({ top: 0, behavior: 'smooth' });
          }}
        >
          <div className={cn('bg-primary transition-all w-16 h-[1px] group-hover:w-24', isActive === 'skills' && 'w-24 bg-text')} />
          Skills
        </div>
        <div
          className={cn(
            'cursor-pointer text-primary transition-all font-semibold flex justify-start items-center gap-4 group',
            isActive === 'projects' && 'text-text'
          )}
          onClick={() => {
            setIsActive('projects');
            // window.scroll({ top: 0, behavior: 'smooth' });
          }}
        >
          <div className={cn('bg-primary transition-all w-16 h-[1px] group-hover:w-24', isActive === 'projects' && 'w-24 bg-text')} />
          Projects
        </div>
        <div
          className={cn(
            'cursor-pointer text-primary transition-all font-semibold flex justify-start items-center gap-4 group',
            isActive === 'education' && 'text-text'
          )}
          onClick={() => {
            setIsActive('education');
            // window.scroll({ top: 0, behavior: 'smooth' });
          }}
        >
          <div className={cn('bg-primary transition-all w-16 h-[1px] group-hover:w-24', isActive === 'education' && 'w-24 bg-text')} />
          Education
        </div>
      </div>
    </>
  );
};

export default Nav;
