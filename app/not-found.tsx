import Link from 'next/link';
import styles from '@/scss/pages/NotFoundPage.module.scss';

const NotFoundPage = () => {
  return (
    <main className={styles.notFoundPageContainer}>
      <div className={styles.header}>
        <div className={styles.header__primary}>OOPS</div>
        <div className={styles.header__secondary}>404 - Page not found</div>
      </div>

      <Link
        href='/'
        className={styles.link}
      >
        Rollback !
      </Link>
    </main>
  );
};

export default NotFoundPage;
