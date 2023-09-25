import { useState, FC, HTMLAttributes, useEffect } from 'react';
import Icons from './Icons';
import styles from '@/scss/components/Intro.module.scss';
import { usePathname } from 'next/navigation';
import NavButton from './NavButton';

interface NavLinkProps extends HTMLAttributes<HTMLDivElement> {
  $isActive?: boolean;
}

const Intro: FC = () => {
  const [isActive, setIsActive] = useState('about');
  const pathname = usePathname();

  const handleScroll = () => {
    let pos = window.scrollY;
    if (0 <= pos && pos < 440) {
      setIsActive('about');
    } else if (440 <= pos && pos < 841) {
      setIsActive('education');
    } else if (841 <= pos && pos < 1553) {
      setIsActive('skills');
    } else if (1553 <= pos && pos < 4000) {
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
            window.scroll({ top: 440, behavior: 'smooth' });
          }}
        >
          <div className={`${styles.nav__link__line} ${isActive === 'education' && styles['active']}`} />
          Education
        </div>
        <div
          className={`${styles.nav__link} ${isActive === 'skills' && styles['active']}`}
          onClick={() => {
            setIsActive('skills');
            window.scroll({ top: 841, behavior: 'smooth' });
          }}
        >
          <div className={`${styles.nav__link__line} ${isActive === 'skills' && styles['active']}`} />
          Skills
        </div>
        <div
          className={`${styles.nav__link} ${isActive === 'projects' && styles['active']}`}
          onClick={() => {
            setIsActive('projects');
            window.scroll({ top: 1553, behavior: 'smooth' });
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
            href='/Resume - Vishal Kumar Sharma.pdf'
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

// const IntroContainer = styled.div``;
// const HeaderContainer = styled.div``;

// const Header = styled.div``;

// const Tag = styled(SecondaryText)`
//   @media (min-width: 1024px) {
//     width: 80%;
//   }
// `;

// const Nav = styled.nav`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   align-items: flex-start;
//   gap: 1rem;
//   @media (max-width: 1024px) {
//     display: none;
//   }
// `;
// const NavLink = styled.div<NavLinkProps>`
//   cursor: pointer;
//   display: block;
//   font-size: 1.5rem;
//   color: var(--primary);
//   transition: all 0.2s;
//   font-weight: 600;
//   color: ${(props) => (props.$isActive ? 'var(--text)' : 'var(--primary)')};

//   .line {
//     background-color: ${(props) => (props.$isActive ? 'var(--text)' : 'var(--primary)')};
//     width: ${(props) => (props.$isActive ? '8rem' : '5rem')};
//   }
//   &:hover {
//     color: var(--text);
//     .line {
//       width: 8rem;
//       background-color: var(--text);
//     }
//   }
// `;

// const Line = styled.div`
//   margin-bottom: 0.7rem;
//   margin-right: 1rem;
//   display: inline-block;
//   height: 0.1rem;
//   width: 5rem;
//   background-color: var(--primary);
//   transition: all 0.2s;
// `;

// const IconsButtonsContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;
// `;

// const NavButtonsContainer = styled.div`
//   display: flex;
//   gap: 1rem;
//   margin-bottom: 1rem;
// `;
