import ColourfulText from '@/components/ui/colourful-text';

const Hero = () => {
  return (
    <section className='min-h-screen flex flex-col justify-center items-center gap-4'>
      <h1 className='text-6xl font-doto text-center font-black'>
        Things I&#39;ve&nbsp;
        <ColourfulText text='Built' />
      </h1>
    </section>
  );
};

export default Hero;
