'use client';

import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const Nav = () => {
  const [isActive, setIsActive] = useState('about');
  const pathname = usePathname();

  const handleScroll = () => {
    let pos = window.scrollY;
    console.log(pos);
    if (0 <= pos && pos < 249) {
      setIsActive('about');
    } else if (250 <= pos && pos < 1050) {
      setIsActive('skills');
    } else if (1151 <= pos && pos < 2165) {
      setIsActive('projects');
    } else if (2166 <= pos && pos < 4000) {
      setIsActive('education');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    pathname === '/' && (
      <div className='flex flex-col justify-between items-start gap-2 max-lg:hidden'>
        <div
          className={cn(
            'cursor-pointer text-primary transition-all font-semibold flex justify-start items-center gap-4 group',
            isActive === 'about' && 'text-text'
          )}
          onClick={() => {
            setIsActive('about');
            window.scroll({ top: 0, behavior: 'smooth' });
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
            window.scroll({ top: 308, behavior: 'smooth' });
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
            window.scroll({ top: 1108, behavior: 'smooth' });
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
            window.scroll({ top: 2218, behavior: 'smooth' });
          }}
        >
          <div className={cn('bg-primary transition-all w-16 h-[1px] group-hover:w-24', isActive === 'education' && 'w-24 bg-text')} />
          Education
        </div>
      </div>
    )
  );
};

export default Nav;
