import Hero from '@/app/(root)/about/_sections/hero';
import MyJourneySoFar from '@/app/(root)/about/_sections/my-journey-so-far';
import MeetVishal from '@/app/(root)/about/_sections/meet-vishal';
import HowIBuildThings from '@/app/(root)/about/_sections/how-i-build-things';
import MakingAnImpact from '@/app/(root)/about/_sections/making-an-impact';
import BeyondTheCode from '@/app/(root)/about/_sections/beyond-the-code';

const AboutPage = () => {
  return (
    <main className='h-screen snap-y snap-mandatory overflow-y-auto scroll-smooth px-4 pb-10'>
      <Hero />
      <section className='space-y-10 min-h-screen snap-start snap-none container mx-auto '>
        <MeetVishal />
        <HowIBuildThings />
        <MyJourneySoFar />
        <MakingAnImpact />
        <BeyondTheCode />
      </section>
    </main>
  );
};

export default AboutPage;
