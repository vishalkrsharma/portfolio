import ColourfulText from '@/components/ui/colourful-text';

const Hero = () => {
  return (
    <section className='min-h-screen flex flex-col justify-center items-center gap-4 snap-start snap-always px-4'>
      <h1 className='text-4xl font-doto text-center font-black'>
        <ColourfulText text='Build' /> Log
      </h1>
    </section>
  );
};

export default Hero;
