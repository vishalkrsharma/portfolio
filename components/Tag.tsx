import { FC, ReactNode } from 'react';
import styles from '@/scss/components/Tag.module.scss';

interface TagProps {
  children: ReactNode;
}

const Tag: FC<TagProps> = ({ children }) => {
  return <div className={styles.tagContainer}>{children}</div>;
};

export default Tag;

// const TagContainer = styled.div`
//   background-color: var(--primary);
//   color: var(--background);
//   padding: 0.25rem 0.75rem;
//   border-radius: var(--borRad);
//   font-size: 1.25rem;
//   font-weight: 700;
// `;
