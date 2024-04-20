import Info from '@/components/info';
import Intro from '@/components/intro';

const Home = () => {
  return (
    <div className='bg-background'>
      <main className='w-[90%] max-w-[1280px] mx-auto lg:flex lg:items-start lg:justify-center lg:gap-4'>
        <Intro />
        <Info />
      </main>
    </div>
  );
};

export default Home;
