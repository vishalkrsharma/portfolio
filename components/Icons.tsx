import { FC, useState } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import styles from '@/scss/components/Icons.module.scss';
import variables from '@/scss/abstracts/_variables.module.scss';

const Icon: FC = () => {
  const [isHoveredLinkedin, setIsHoveredLinkedin] = useState(false);
  const [isHoveredGithub, setIsHoveredGithub] = useState(false);
  const [isHoveredLeetcode, setIsHoveredLeetcode] = useState(false);

  const handleMouseEnter = (icon: string) => {
    if (icon === 'github') setIsHoveredGithub(true);
    else if (icon === 'linkedin') setIsHoveredLinkedin(true);
    else setIsHoveredLeetcode(true);
  };

  const handleMouseLeave = (icon: string) => {
    if (icon === 'github') setIsHoveredGithub(false);
    else if (icon === 'linkedin') setIsHoveredLinkedin(false);
    else setIsHoveredLeetcode(false);
  };

  return (
    <div className={styles.iconsContainer}>
      <a
        aria-label='LinkedIn'
        href='https://www.linkedin.com/in/vishal-kumar-sharma-955aa0201/'
        target='_blank'
      >
        <FaLinkedin
          size={35}
          style={{ transition: 'all .2s', cursor: 'pointer', fill: isHoveredLinkedin ? variables.text : variables.primary }}
          onMouseEnter={() => handleMouseEnter('linkedin')}
          onMouseLeave={() => handleMouseLeave('linkedin')}
        />
      </a>
      <a
        aria-label='Github'
        href='https://github.com/vishalkrsharma'
        target='_blank'
      >
        <FaGithub
          size={35}
          style={{ transition: 'all .2s', cursor: 'pointer', fill: isHoveredGithub ? variables.text : variables.primary }}
          onMouseEnter={() => handleMouseEnter('github')}
          onMouseLeave={() => handleMouseLeave('github')}
        />
      </a>
      <a
        aria-label='LeetCode'
        href='https://leetcode.com/vishalkrsharma/'
        target='_black'
      >
        <SiLeetcode
          size={35}
          style={{ transition: 'all .2s', cursor: 'pointer', fill: isHoveredLeetcode ? variables.text : variables.primary }}
          onMouseEnter={() => handleMouseEnter('leetcode')}
          onMouseLeave={() => handleMouseLeave('leetcode')}
        />
      </a>
    </div>
  );
};

export default Icon;

// const IconsContainer = styled.div`
//   display: flex;
//   justify-content: flex-start;
//   align-items: stretch;
//   gap: 1.5rem;
//   /* @media (max-width: 1024px) {
//     margin-top: 2rem;
//   } */
// `;
