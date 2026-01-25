import Hero from '@/app/(root)/about/_sections/hero';
import MyJourneySoFar from '@/app/(root)/about/_sections/my-journey-so-far';
import MeetVishal from '@/app/(root)/about/_sections/meet-vishal';
import HowIBuildThings from '@/app/(root)/about/_sections/how-i-build-things';
import MakingAnImpact from '@/app/(root)/about/_sections/making-an-impact';
import BeyondTheCode from '@/app/(root)/about/_sections/beyond-the-code';

const AboutPage = () => {
  return (
    <main className='h-[100dvh] overflow-y-auto snap-y snap-mandatory scroll-smooth'>
      <Hero />
      <section className='snap-start snap-always space-y-10 min-h-screen container mx-auto px-4 py-10 relative'>
        <MeetVishal />
        <HowIBuildThings />
        <MyJourneySoFar />
        <MakingAnImpact />
        <BeyondTheCode />
        {/* Invisible snap point at the end of the section */}
        <div className='absolute bottom-0 h-px w-full snap-end pointer-events-none' />
      </section>
    </main>
  );
};

export default AboutPage;
