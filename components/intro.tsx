import Nav from '@/components/nav';
import SocialLinks from '@/components/social-links';

const Intro = () => {
  return (
    <div className='py-32 px-4 flex flex-col justify-between items-start min-h-screen lg:sticky lg:top-0 lg:w-1/2'>
      <header className='text-text flex flex-col gap-4'>
        <div className='text-4xl font-bold tracking-[.5rem] leading-[3rem] text-wrap'>
          Vishal Kumar <br /> Sharma
        </div>
        <div className='text-xl font-semibold tracking-[.2rem]'>Full Stack Web Developer</div>
        <div className='text-lg text-primary text-balance'>Crafting digital marvels through the fusion of code and creativity.</div>
      </header>
      <Nav />
      <SocialLinks />
    </div>
  );
};

export default Intro;
