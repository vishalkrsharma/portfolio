import About from './About';
import Education from './Education';
import Skills from './Skills';
import FeaturedProjects from './FeaturedProjects';
import Footer from './Footer';
import styles from '@/scss/components/Info.module.scss';

const Info = () => {
  return (
    <main className={styles.infoContainer}>
      <About />
      <Education />
      <Skills />
      <FeaturedProjects />
      <Footer />
    </main>
  );
};

export default Info;
