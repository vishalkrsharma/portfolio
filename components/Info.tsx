import { FC } from 'react';
import About from './About';
import Education from './Education';
import Skills from './Skills';
import FeaturedProjects from './FeaturedProjects';
import Footer from './Footer';
import styles from '@/scss/components/Info.module.scss';

const Info: FC = () => {
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

// const InfoContainer = styled.div`
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   gap: 20rem;
//   padding: 10rem 0;
//   @media (max-width: 1024px) {
//     gap: 10rem;
//   }
// `;
