import Nav from '@/components/Nav';
import SocialLinks from './SocialLinks';

const Intro = () => {
  return (
    <div className='px-4 max-lg:flex-1 flex flex-col justify-evenly items-start gap-2 min-h-screen lg:sticky lg:top-0'>
      <header className='text-text flex flex-col gap-4'>
        <div className='text-4xl font-bold tracking-[.2rem] leading-10'>Vishal Kumar Sharma</div>
        <div className='text-xl font-semibold tracking-[.2rem]'>Web Developer & Designer</div>
        <div className='text-lg text-primary text-balance'>Crafting digital wonders through the fusion of code and creativity.</div>
      </header>
      <Nav />
      <SocialLinks />
    </div>
  );
};

export default Intro;
