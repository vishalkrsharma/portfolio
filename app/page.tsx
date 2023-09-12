'use client';

import Info from '@/components/Info';
import Intro from '@/components/Intro';
import styles from '@/scss/pages/HomePage.module.scss';
import { FC } from 'react';

const HomePage: FC = () => {
  return (
    <>
      <div className={styles.homePageContainer}>
        <Intro />
        <Info />
      </div>
    </>
  );
};

export default HomePage;
