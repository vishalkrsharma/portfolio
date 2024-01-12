'use client';

import { useState, useEffect } from 'react';
import Icons from './Icons';
import styles from '@/scss/components/Intro.module.scss';
import { usePathname } from 'next/navigation';
import NavButton from './NavButton';

const Intro = () => {
  const [isActive, setIsActive] = useState('about');
  const pathname = usePathname();

  const handleScroll = () => {
    let pos = window.scrollY;
    console.log(pos);
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

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.introContainer}>
      <header className={styles.header}>
        <div className={styles.header__name}>Vishal Kumar Sharma</div>
        <div className={styles.header__primary}>Web Developer & Designer</div>
        <div className={styles.tag}>Crafting digital wonders through the fusion of code and creativity.</div>
      </header>
      <nav className={styles.nav}>
        <div
          className={`${styles.nav__link} ${isActive === 'about' && styles['active']}`}
          onClick={() => {
            setIsActive('about');
            window.scroll({ top: 0, behavior: 'smooth' });
          }}
        >
          <div className={`${styles.nav__link__line} ${isActive === 'about' && styles['active']}`} />
          About
        </div>
        <div
          className={`${styles.nav__link} ${isActive === 'education' && styles['active']}`}
          onClick={() => {
            setIsActive('education');
            window.scroll({ top: 261, behavior: 'smooth' });
          }}
        >
          <div className={`${styles.nav__link__line} ${isActive === 'education' && styles['active']}`} />
          Education
        </div>
        <div
          className={`${styles.nav__link} ${isActive === 'skills' && styles['active']}`}
          onClick={() => {
            setIsActive('skills');
            window.scroll({ top: 688, behavior: 'smooth' });
          }}
        >
          <div className={`${styles.nav__link__line} ${isActive === 'skills' && styles['active']}`} />
          Skills
        </div>
        <div
          className={`${styles.nav__link} ${isActive === 'projects' && styles['active']}`}
          onClick={() => {
            setIsActive('projects');
            window.scroll({ top: 1675, behavior: 'smooth' });
          }}
        >
          <div className={`${styles.nav__link__line} ${isActive === 'projects' && styles['active']}`} />
          Projects
        </div>
      </nav>
      <div className={styles.iconsButtonsContainer}>
        <div className={styles.navButtons}>
          <NavButton
            $isActive={pathname === '/'}
            ariaLabel='Home'
            href='/'
          >
            Home
          </NavButton>
          <NavButton
            $isActive={false}
            ariaLabel='Resume'
            href='https://drive.google.com/drive/folders/12DLNoGWQrAZgB4nxVII88l6zcaJ8RKC4?usp=sharing'
            newTab={true}
          >
            Resume
          </NavButton>
        </div>
        <Icons />
      </div>
    </div>
  );
};

export default Intro;
