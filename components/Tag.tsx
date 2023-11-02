import { PropsWithChildren } from 'react';
import styles from '@/scss/components/Tag.module.scss';

const Tag = ({ children }: PropsWithChildren) => {
  return <div className={styles.tagContainer}>{children}</div>;
};

export default Tag;
