'use client';

import { FC } from 'react';
import styles from '@/scss/pages/NotFoundPage.module.scss';
import Link from 'next/link';

const NotFoundPage: FC = () => {
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
