import ColourfulText from '@/components/ui/colourful-text';

const Hero = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center gap-4 snap-start'>
      <h1 className='text-4xl font-doto font-black text-center'>
        <ColourfulText text='Behind' /> the Code
      </h1>
    </div>
  );
};

export default Hero;
