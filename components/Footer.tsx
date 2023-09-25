import { FC } from 'react';
import styles from '@/scss/components/Footer.module.scss';

const Footer: FC = () => {
  return (
    <footer className={styles.footerContainer}>
      Loosely designed in <span className={styles.highlight}>Figma</span> and coded in <span className={styles.highlight}>Visual Studio Code</span> by yours
      truly. Built with <span className={styles.highlight}>ReactJs</span> and <span className={styles.highlight}>styled-components</span>, deployed with{' '}
      <span className={styles.highlight}>Vercel</span>. All text is set in the <span className={styles.highlight}>Victor Mono</span> typeface.
    </footer>
  );
};

export default Footer;

// const FooterContainer = styled.div`
//   font-size: 1.25rem;
//   color: var(--primary);
// `;
