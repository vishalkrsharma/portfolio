import Info from '@/components/Info';
import Intro from '@/components/Intro';
import styles from '@/scss/pages/HomePage.module.scss';

const HomePage = () => {
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
