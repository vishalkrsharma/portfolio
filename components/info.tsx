import Footer from '@/components/footer';
import About from '@/components/about';
import Skills from '@/components/skills';
import Projects from '@/components/projects';
import Education from '@/components/education';

const Info = () => {
  return (
    <main className='py-32 flex-1 flex flex-col gap-48 max-lg:gap-8 lg:w-1/2'>
      <About />
      <Skills />
      <Projects />
      <Education />
      <Footer />
    </main>
  );
};

export default Info;
