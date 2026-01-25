import Platforms from '@/app/(root)/profiles/_section/platforms';
import ColourfulText from '@/components/ui/colourful-text';
import Link from 'next/link';

const ProfilesPage = () => {
  return (
    <main className='min-h-screen flex items-center justify-center flex-col gap-12 py-10 px-4 container mx-auto'>
      <h1 className='text-4xl font-doto font-black text-center'>
        You&#39;ll find me online as{' '}
        <Link
          href='https://linktr.ee/vishalkrsharma'
          target='_blank'
          className='block'
        >
          <ColourfulText text='@vishalkrsharma' />
        </Link>
      </h1>
      <Platforms />
    </main>
  );
};

export default ProfilesPage;
