import Intro from '@/components/Intro';

const Home = () => {
  return (
    <div className='bg-background'>
      <main className='w-[90%] max-w-[1280px] mx-auto lg:flex lg:items-center lg:justify-center lg:gap-4 '>
        <Intro />
      </main>
    </div>
  );
};

export default Home;
