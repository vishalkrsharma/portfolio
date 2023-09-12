import { FC, ReactNode, useState } from 'react';
import { FaLink, FaGithub } from 'react-icons/fa';
import styles from '@/scss/components/HyperLink.module.scss';
import Link from 'next/link';
import variables from '@/scss/abstracts/_variables.module.scss';

interface HyperLinkProps {
  children: ReactNode;
  link: string;
  gh: boolean;
}

const HyperLink: FC<HyperLinkProps> = ({ children, link, gh }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Link
      className={styles.hyperLinkContainer}
      href={link}
      target='_blank'
    >
      {gh ? (
        <FaGithub
          size={15}
          style={{ transition: 'all .2s', cursor: 'pointer', fill: isHovered ? variables.text : variables.primary }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      ) : (
        <FaLink
          size={15}
          style={{ transition: 'all .2s', cursor: 'pointer', fill: isHovered ? variables.text : variables.primary }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      )}

      {children}
    </Link>
  );
};

export default HyperLink;

// const HyperLinkContainer = styled.a`
//   margin: 1rem 0;
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
//   gap: 1rem;
//   cursor: pointer;
//   font-size: 1.5rem;
//   &:hover {
//     * {
//       fill: var(--text);
//       transition: all 0.2s;
//     }
//   }
// `;
